import {Component} from '@angular/core';


@Component({

  selector: 'button-demo',
  templateUrl: 'src/button/button-demo.html',
  styleUrls: ['src/button/button-demo.css'],
})
export class ButtonDemo {
  isDisabled: boolean = false;
  clickCounter: number = 0;
}
