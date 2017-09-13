---
layout: post
title:  "Angular.io WebSocket with rxjs testing"
date:   2017-09-13 16:00:50 +0000
categories: testing websocket with rxjs and angular.io
---

The WebSocket RxJs wrapper for WebSocket credits for https://medium.com/@lwojciechowski/websockets-with-angular2-and-rxjs-8b6c5be02fac
```typescript

import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Observer} from "rxjs/Observer";

@Injectable()
export class WebSocketService {
  private subject: Subject<MessageEvent>;

  constructor(@Inject(Window) private window) {
  }

  public connect(url: string): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
    }

    return this.subject;
  }

  private create(url: string): Subject<MessageEvent> {
    const ws = new this.window.WebSocket(url);

    const observable = Observable.create((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);

      return ws.close.bind(ws);
    });

    const observer = {
      next: (data: Object) => {
        if (ws.readyState === this.window.WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };

    return Subject.create(observer, observable);
  }
}


```

And the test for it


```typescript
import {TestBed} from '@angular/core/testing';
import 'rxjs/add/operator/zip';
import {WebSocketService} from "./web-socket.service";

describe('WebSocketService', () => {
  const url = 'ws://localhost:8888';
  let wsService: WebSocketService;
  let wsSubject;
  let socketMock;

  beforeEach(() => {
    function WebSocketStub(url: string) {
      socketMock = {
        url: url,
        readyState: WebSocket.CONNECTING,
        send: jasmine.createSpy('send'),
        close: jasmine.createSpy('close').and.callFake(function () {
          socketMock.readyState = WebSocket.CLOSING;
        })
      };

      return socketMock;
    }

    WebSocketStub['OPEN'] = WebSocket.OPEN;
    WebSocketStub['CLOSED'] = WebSocket.CLOSED;

    TestBed.configureTestingModule({
      providers: [
        WebSocketService,
        {
          provide: Window,
          useValue: {WebSocket: WebSocketStub},
        }
      ]
    });

    wsService = TestBed.get(WebSocketService);
    wsSubject = wsService.connect(url);
  });

  describe('subject.next()', () => {
    it('should send the message on the websocket.send', () => {
      const message = {key: 'hello'};

      wsSubject.next(message);

      expect(socketMock.send.calls.count()).toEqual(0);

      socketMock.readyState = WebSocket.OPEN;
      wsSubject.next(message);

      expect(socketMock.send.calls.argsFor(0)).toEqual(['{"key":"hello"}']);
    });
  });

  describe('web socket onmessage()', () => {
    it('should call subscribe next callback', (done: DoneFn) => {
      const message = {key: 'hello'};

      wsSubject.subscribe(s => {
        expect(s).toEqual(message);
        done();
      }, () => {
      }, () => {
      });
      socketMock.onmessage(message);
    });
  });

  describe('web socket on onerror()', () => {
    it('should call subscribe error callback', (done: DoneFn) => {
      const error = {key: 'hello'};

      wsSubject.subscribe(() => {
      }, s => {
        expect(s).toEqual(error);
        done();
      });
      socketMock.onerror(error);
    });
  });

  describe('web socket onclose()', () => {
    it('should call subscribe complete callback', (done: DoneFn) => {
      wsSubject.subscribe(() => {
      }, () => {
      }, s => {
        expect(s).toEqual(undefined);
        done();
      });

      socketMock.onclose();
    });
  });

  describe('web socket close()', () => {
    it('should call websocket close on unsubscribe', () => {
      expect(socketMock.close.calls.count()).toEqual(0);

      wsSubject.subscribe(() => {
      }, () => {
      }, s => {
      }).unsubscribe();

      expect(socketMock.close.calls.count()).toEqual(1);
    });
  });
});


```