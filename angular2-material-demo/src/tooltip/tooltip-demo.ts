import {Component} from "@angular/core";
import {TooltipPosition} from "@angular/material";


@Component({
  selector: 'tooltip-demo',
  templateUrl: 'src/tooltip/tooltip-demo.html',
  styleUrls: ['src/tooltip/tooltip-demo.css'],
})
export class TooltipDemo {
  position: TooltipPosition = 'below';
}
