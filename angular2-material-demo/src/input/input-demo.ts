import {Component} from '@angular/core';


let max = 5;

@Component({
  selector: 'input-demo',
  templateUrl: 'src/input/input-demo.html',
  styleUrls: ['src/input/input-demo.css'],
})
export class InputDemo {
  dividerColor: boolean;
  requiredField: boolean;
  floatingLabel: boolean;
  name: string;
  items: any[] = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 },
  ];

  addABunch(n: number) {
    for (let x = 0; x < n; x++) {
      this.items.push({ value: ++max });
    }
  }
}
