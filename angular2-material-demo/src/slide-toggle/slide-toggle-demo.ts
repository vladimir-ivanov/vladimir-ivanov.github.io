import {Component} from "@angular/core";


@Component({
  selector: 'switch-demo',
  templateUrl: 'src/slide-toggle/slide-toggle-demo.html',
  styleUrls: ['src/slide-toggle/slide-toggle-demo.css'],
})
export class SlideToggleDemo {
  firstToggle: boolean;

  onFormSubmit() {
    alert(`You submitted the form.`);
  }

}
