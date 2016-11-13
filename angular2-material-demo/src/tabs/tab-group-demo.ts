import {Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'tab-group-demo',
  templateUrl: 'src/tabs/tab-group-demo.html',
  styleUrls: ['src/tabs/tab-group-demo.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsDemo {
  tabs = [
    { label: 'Tab One', content: 'This is the body of the first tab' },
    { label: 'Tab Two', content: 'This is the body of the second tab' },
    { label: 'Tab Three', content: 'This is the body of the third tab' },
  ];
  asyncTabs: Observable<any>;
  constructor() {
    this.asyncTabs = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(this.tabs);
      }, 1000);
    });
  }
}
