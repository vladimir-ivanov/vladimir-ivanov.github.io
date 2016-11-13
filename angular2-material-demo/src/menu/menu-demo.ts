import {Component} from '@angular/core';


@Component({
  selector: 'menu-demo',
  templateUrl: 'src/menu/menu-demo.html',
  styleUrls: ['src/menu/menu-demo.css'],
})
export class MenuDemo {
  selected = '';
  items = [
    {text: 'Refresh'},
    {text: 'Settings'},
    {text: 'Help', disabled: true},
    {text: 'Sign Out'}
  ];

  select(text: string) { this.selected = text; }
}
