import {Component} from '@angular/core';


@Component({
    selector: 'progress-circle-demo',
    templateUrl: 'src/progress-circle/progress-circle-demo.html',
    styleUrls: ['src/progress-circle/progress-circle-demo.css'],
})
export class ProgressCircleDemo {
    progressValue: number = 40;

    step(val: number) {
        this.progressValue += val;
    }

}
