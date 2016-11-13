import {Component, OnInit} from "@angular/core";

@Component({
    selector: "demo",
    providers: [],
    templateUrl: "src/demo/demo.html",
    styles: [],
})
export class DemoComponent implements OnInit {
    todos = [
        {
            completed: true,
            name: "Buy Milk"
        },
        {
            completed: false,
            name: "Buy Bread"
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }
}

