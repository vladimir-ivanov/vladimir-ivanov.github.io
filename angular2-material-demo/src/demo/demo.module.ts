import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DemoComponent} from "./demo.component.ts";
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        DemoComponent
    ],
    exports: [
        DemoComponent
    ],
    providers: []
})
export class DemoModule {
}