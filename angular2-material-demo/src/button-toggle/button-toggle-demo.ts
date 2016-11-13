import {Component} from '@angular/core';
import {MdUniqueSelectionDispatcher} from '@angular/material';

@Component({
  selector: 'button-toggle-demo',
  templateUrl: 'src/button-toggle/button-toggle-demo.html',
  providers: [MdUniqueSelectionDispatcher],
})
export class ButtonToggleDemo {
  favoritePie = 'Apple';
  pieOptions = [
    'Apple',
    'Cherry',
    'Pecan',
    'Lemon',
  ];
}
