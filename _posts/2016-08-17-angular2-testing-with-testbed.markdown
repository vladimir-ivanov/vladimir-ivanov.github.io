---
layout: post
title:  "Example of how to use TestBed class from angular2 testing"
date:   2016-08-17 16:00:50 +0000
categories: testing angular2 typescript
---

The latest @angular-2.0.0.rc.5 breaks the tests which used to use TEST_BROWSER_PLATFORM_PROVIDERS, beforeEachProviders, TestComponentBuilder etc

Lets compare the tests after the changes for the component:

```javascript

    import {Component, Inject, OnInit, OnDestroy} from "@angular/core";
    import {CounterActions} from "./counter-actions.ts";
    import {CounterStore} from "./counter-store.ts";
    
    @Component({
        selector: "counter",
        providers: [CounterActions, CounterStore],
        templateUrl: "./src/counter/counter.html"
    })
    export class CounterPageComponent implements OnInit, OnDestroy {
        counter:number = 0;
    
        constructor(@Inject(CounterActions) private counterActions,
                    @Inject(CounterStore) private counterStore) {
        }
    
        ngOnInit() {
            this.counter = this.counterStore.getCounter();
            this.counterStore.subscribe(() => this.counter = this.counterStore.getCounter());
        }
    
        ngOnDestroy() {
        }
    
        increment() {
            this.counterActions.increment();
        }
    
        decrement() {
            this.counterActions.decrement();
        }
    
        reset() {
            this.counterActions.reset();
        }
    }

```

An example of old (@angular-2.0.0.rc1) style test


```javascript

    import {
        TEST_BROWSER_PLATFORM_PROVIDERS,
        TEST_BROWSER_APPLICATION_PROVIDERS
    } from 'angular2/platform/testing/browser';
    
    import {
        beforeEachProviders,
        beforeEach,
        inject,
        it,
        describe,
        TestComponentBuilder, setBaseTestProviders, injectAsync
    } from "angular2/testing";
    import {CounterPageComponent} from "../../src/counter/counter-page-component";
    import {CounterStore} from "../../src/counter/counter-store";
    import {CounterActions} from "../../src/counter/counter-actions";
    import {provide} from "angular2/core";
    
    setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);
    
    describe("CounterPageComponent", () => {
        let component:any;
        let actions:any;
        let store:any;
    
        beforeEachProviders(() => [CounterActions, CounterStore]);
    
        beforeEach(injectAsync([TestComponentBuilder], tcb => {
            store = new CounterStore();
            actions = new CounterActions();
    
            spyOn(store, "subscribe");
            spyOn(store, "getCounter").and.returnValue(33);
            spyOn(actions, "increment");
            spyOn(actions, "decrement");
            spyOn(actions, "reset");
    
            return tcb.overrideTemplate(CounterPageComponent, "<sec></sec>")
                .overrideProviders(CounterPageComponent, [
                    provide(CounterActions, {useValue: actions}),
                    provide(CounterStore, {useValue: store}) // or useFactory: () => {let counterStore = new CounterStore() //spy and return counterStore}
                ])
                .createAsync(CounterPageComponent)
                .then(f => component = f.componentInstance);
        }));
    
        describe("ngOnInit()", () => {
            beforeEach(() => component.ngOnInit());
    
            it("should call getCounter() to get initial value", ()  => {
                expect(store.getCounter.calls.count()).toEqual(1);
            });
    
            it("should subscribe to the counterStore", ()  => {
                let subscribeCallback = store.subscribe.calls.argsFor(0)[0];
                subscribeCallback();
    
                expect(store.getCounter.calls.count()).toEqual(2);
                expect(component.counter).toEqual(33);
            });
        });
    
        describe("increment()", () => {
            it("should proxy to counterActions.increment()", () => {
                component.increment();
    
                expect(actions.increment.calls.count()).toEqual(1);
            });
        });
    
        describe("decrement()", () => {
            it("should proxy to counterActions.decrement()", () => {
                component.decrement();
    
                expect(actions.decrement.calls.count()).toEqual(1);
            });
        });
    
        describe("reset()", () => {
            it("should proxy to counterActions.reset()", () => {
                component.reset();
    
                expect(actions.reset.calls.count()).toEqual(1);
            });
        });
    });
```

And the post @angular2.0.0-rc.5 version of it - using TestBed class

```javascript

    /// <reference path="../../typings/browser/definitions/jasmine/jasmine.d.ts"/>
    import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
    import {TestBed} from "@angular/core/testing/test_bed";
    import {CounterPageComponent} from "../../src/counter/counter-page-component";
    import {CounterStore} from "../../src/counter/counter-store";
    import {CounterActions} from "../../src/counter/counter-actions";
    import {provide} from "@angular/core";
    
    TestBed.initTestEnvironment(
        BrowserDynamicTestingModule,
        platformBrowserDynamicTesting()
    );
    
    describe("CounterPageComponent", () => {
        let component:any;
        let actions:any;
        let store:any;
    
    
        beforeEach(() => {
            store = new CounterStore();
            actions = new CounterActions();
    
            spyOn(store, "subscribe");
            spyOn(store, "getCounter").and.returnValue(33);
            spyOn(actions, "increment");
            spyOn(actions, "decrement");
            spyOn(actions, "reset");
    
            TestBed.configureTestingModule({
                providers: [
                    provide(CounterActions, {useValue: actions}),
                    provide(CounterStore, {useValue: store})
                ],
                declarations: [CounterPageComponent]
            });
    
            TestBed.overrideComponent(CounterPageComponent, {
                set: {
                    template: `<div>Overridden template here</div>`
                }
            });
        });
    
        beforeEach(() => {
            let fixture = TestBed.createComponent(CounterPageComponent);
            fixture.detectChanges();
    
            component = fixture.componentInstance;
        });
    
        describe("ngOnInit()", () => {
            beforeEach(() => component.ngOnInit());
    
            it("should call getCounter() to get initial value", () => {
                expect(store.getCounter.calls.count()).toEqual(2);
            });
    
            it("should subscribe to the counterStore", () => {
                let subscribeCallback = store.subscribe.calls.argsFor(0)[0];
                subscribeCallback();
    
                expect(store.getCounter.calls.count()).toEqual(3);
                expect(component.counter).toEqual(33);
            });
        });
    
        describe("increment()", () => {
            it("should proxy to counterActions.increment()", () => {
                component.increment();
    
                expect(actions.increment.calls.count()).toEqual(1);
            });
        });
    
        describe("decrement()", () => {
            it("should proxy to counterActions.decrement()", () => {
                component.decrement();
    
                expect(actions.decrement.calls.count()).toEqual(1);
            });
        });
    
        describe("reset()", () => {
            it("should proxy to counterActions.reset()", () => {
                component.reset();
    
                expect(actions.reset.calls.count()).toEqual(1);
            });
        });
    });


```

A full working example of the above [Component](https://github.com/vladimir-ivanov/angular2-flux-example/blob/master/test/counter/counter-page-component-spec.ts)  plus example of testing [Pipes](https://github.com/vladimir-ivanov/angular2-flux-example/blob/master/test/home/upper-case-pipe-injected-spec.ts) and [Services](https://github.com/vladimir-ivanov/angular2-flux-example/blob/master/test/counter/counter-actions-spec.ts) 
