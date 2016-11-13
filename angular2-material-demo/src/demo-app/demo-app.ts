import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'home',
  template: `
    <p>Welcome to the development demos for Angular Material 2!</p>
    <p>Open the sidenav to select a demo. </p>
  `
})
export class Home {}

@Component({
  selector: 'demo-app',
  providers: [],
  templateUrl: 'src/demo-app/demo-app.html',
  styleUrls: ['src/demo-app/demo-app.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoApp { }
