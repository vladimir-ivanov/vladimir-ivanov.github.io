import {Component} from '@angular/core';


@Component({
  selector: 'radio-demo',
  templateUrl: 'src/radio/radio-demo.html',
  styleUrls: ['src/radio/radio-demo.css'],
})
export class RadioDemo {
  isDisabled: boolean = false;
  isAlignEnd: boolean = false;
  favoriteSeason: string = 'Autumn';
  seasonOptions = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}
