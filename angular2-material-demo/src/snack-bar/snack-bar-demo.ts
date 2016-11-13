import {Component, ViewContainerRef, Inject} from "@angular/core";
import {MdSnackBar, MdSnackBarConfig} from "@angular/material";

@Component({
    selector: 'snack-bar-demo',
    templateUrl: 'src/snack-bar/snack-bar-demo.html',
})
export class SnackBarDemo {
    message: string = 'Snack Bar opened.';
    actionButtonLabel: string = 'Retry';
    action: boolean = false;

    constructor(@Inject(MdSnackBar) private snackBar,
                @Inject(ViewContainerRef) private viewContainerRef) {
    }

    open() {
        let config = new MdSnackBarConfig(this.viewContainerRef);
        this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
    }
}


@Component({
    selector: 'demo-snack',
    templateUrl: 'src/snack-bar/snack-bar-demo.html',
    styleUrls: ['src/snack-bar/snack-bar-demo.css'],
})
export class DemoSnack {
}
