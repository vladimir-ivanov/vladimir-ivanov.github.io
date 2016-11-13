import {Component, ViewContainerRef, Inject} from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

@Component({
    selector: 'dialog-demo',
    templateUrl: 'src/dialog/dialog-demo.html',
    styleUrls: ['src/dialog/dialog-demo.css'],
})
export class DialogDemo {
    dialogRef: MdDialogRef<JazzDialog>;
    lastCloseResult: string;

    constructor(@Inject(MdDialog) private dialog,
                @Inject(ViewContainerRef) private  viewContainerRef) {
    }

    open() {
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.dialogRef = this.dialog.open(JazzDialog, config);

        this.dialogRef.afterClosed().subscribe(result => {
            this.lastCloseResult = result;
            this.dialogRef = null;
        });
    }
}


@Component({
    selector: 'demo-jazz-dialog',
    template: `
  <p>It's Jazz!</p>
  <p><label>How much? <input #howMuch></label></p>
  <button type="button" (click)="dialogRef.close(howMuch.value)">Close dialog</button>`
})
export class JazzDialog {
    constructor(@Inject(MdDialogRef) private dialogRef: MdDialogRef<JazzDialog>) {
    }
}
