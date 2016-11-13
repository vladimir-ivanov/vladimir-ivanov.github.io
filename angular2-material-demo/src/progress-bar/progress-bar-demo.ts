import {Component} from '@angular/core';


// TODO(josephperrott): Add an automatically filling example progress bar.

@Component({
    selector: 'progress-bar-demo',
    templateUrl: 'src/progress-bar/progress-bar-demo.html',
    styleUrls: ['src/progress-bar/progress-bar-demo.css'],
})
export class ProgressBarDemo {
    determinateProgressValue: number = 30;
    bufferProgressValue: number = 30;
    bufferBufferValue: number = 40;

    stepDeterminateProgressVal(val: number) {
        this.determinateProgressValue += val;
    }

    stepBufferProgressVal(val: number) {
        this.bufferProgressValue += val;
    }

    stepBufferBufferVal(val: number) {
        this.bufferBufferValue += val;
    }
}
