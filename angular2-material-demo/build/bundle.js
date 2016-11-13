webpackJsonp([0],{

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var BaselineDemo = (function () {
    function BaselineDemo() {
    }
    BaselineDemo = __decorate([
        core_1.Component({
            selector: 'baseline-demo',
            templateUrl: 'src/baseline/baseline-demo.html',
            styleUrls: ['src/baseline/baseline-demo.css'],
        })
    ], BaselineDemo);
    return BaselineDemo;
}());
exports.BaselineDemo = BaselineDemo;


/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(38);
var ButtonToggleDemo = (function () {
    function ButtonToggleDemo() {
        this.favoritePie = 'Apple';
        this.pieOptions = [
            'Apple',
            'Cherry',
            'Pecan',
            'Lemon',
        ];
    }
    ButtonToggleDemo = __decorate([
        core_1.Component({
            selector: 'button-toggle-demo',
            templateUrl: 'src/button-toggle/button-toggle-demo.html',
            providers: [material_1.MdUniqueSelectionDispatcher],
        })
    ], ButtonToggleDemo);
    return ButtonToggleDemo;
}());
exports.ButtonToggleDemo = ButtonToggleDemo;


/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var ButtonDemo = (function () {
    function ButtonDemo() {
        this.isDisabled = false;
        this.clickCounter = 0;
    }
    ButtonDemo = __decorate([
        core_1.Component({
            selector: 'button-demo',
            templateUrl: 'src/button/button-demo.html',
            styleUrls: ['src/button/button-demo.css'],
        })
    ], ButtonDemo);
    return ButtonDemo;
}());
exports.ButtonDemo = ButtonDemo;


/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var CardDemo = (function () {
    function CardDemo() {
    }
    CardDemo = __decorate([
        core_1.Component({
            selector: 'card-demo',
            templateUrl: 'src/card/card-demo.html',
            styleUrls: ['src/card/card-demo.css'],
        })
    ], CardDemo);
    return CardDemo;
}());
exports.CardDemo = CardDemo;


/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var MdCheckboxDemoNestedChecklist = (function () {
    function MdCheckboxDemoNestedChecklist() {
        this.tasks = [
            {
                name: 'Reminders',
                completed: false,
                subtasks: [
                    { name: 'Cook Dinner', completed: false },
                    { name: 'Read the Material Design Spec', completed: false },
                    { name: 'Upgrade Application to Angular2', completed: false }
                ]
            },
            {
                name: 'Groceries',
                completed: false,
                subtasks: [
                    { name: 'Organic Eggs', completed: false },
                    { name: 'Protein Powder', completed: false },
                    { name: 'Almond Meal Flour', completed: false }
                ]
            }
        ];
    }
    MdCheckboxDemoNestedChecklist.prototype.allComplete = function (task) {
        var subtasks = task.subtasks;
        return subtasks.every(function (t) { return t.completed; }) ? true
            : subtasks.every(function (t) { return !t.completed; }) ? false
                : task.completed;
    };
    MdCheckboxDemoNestedChecklist.prototype.someComplete = function (tasks) {
        var numComplete = tasks.filter(function (t) { return t.completed; }).length;
        return numComplete > 0 && numComplete < tasks.length;
    };
    MdCheckboxDemoNestedChecklist.prototype.setAllCompleted = function (tasks, completed) {
        tasks.forEach(function (t) { return t.completed = completed; });
    };
    MdCheckboxDemoNestedChecklist = __decorate([
        core_1.Component({
            selector: 'md-checkbox-demo-nested-checklist',
            styles: ["\n    li {\n      margin-bottom: 4px;\n    }\n  "],
            templateUrl: 'src/checkbox/nested-checklist.html',
        })
    ], MdCheckboxDemoNestedChecklist);
    return MdCheckboxDemoNestedChecklist;
}());
exports.MdCheckboxDemoNestedChecklist = MdCheckboxDemoNestedChecklist;
var CheckboxDemo = (function () {
    function CheckboxDemo() {
        this.isIndeterminate = false;
        this.isChecked = false;
        this.isDisabled = false;
        this.alignment = 'start';
    }
    CheckboxDemo.prototype.printResult = function () {
        if (this.isIndeterminate) {
            return 'Maybe!';
        }
        return this.isChecked ? 'Yes!' : 'No!';
    };
    CheckboxDemo = __decorate([
        core_1.Component({
            selector: 'md-checkbox-demo',
            templateUrl: 'src/checkbox/checkbox-demo.html',
            styleUrls: ['src/checkbox/checkbox-demo.css'],
        })
    ], CheckboxDemo);
    return CheckboxDemo;
}());
exports.CheckboxDemo = CheckboxDemo;


/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            template: "\n    <p>Welcome to the development demos for Angular Material 2!</p>\n    <p>Open the sidenav to select a demo. </p>\n  "
        })
    ], Home);
    return Home;
}());
exports.Home = Home;
var DemoApp = (function () {
    function DemoApp() {
    }
    DemoApp = __decorate([
        core_1.Component({
            selector: 'demo-app',
            providers: [],
            templateUrl: 'src/demo-app/demo-app.html',
            styleUrls: ['src/demo-app/demo-app.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        })
    ], DemoApp);
    return DemoApp;
}());
exports.DemoApp = DemoApp;


/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(38);
var DialogDemo = (function () {
    function DialogDemo(dialog, viewContainerRef) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
    }
    DialogDemo.prototype.open = function () {
        var _this = this;
        var config = new material_1.MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;
        this.dialogRef = this.dialog.open(JazzDialog, config);
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.lastCloseResult = result;
            _this.dialogRef = null;
        });
    };
    DialogDemo = __decorate([
        core_1.Component({
            selector: 'dialog-demo',
            templateUrl: 'src/dialog/dialog-demo.html',
            styleUrls: ['src/dialog/dialog-demo.css'],
        }),
        __param(0, core_1.Inject(material_1.MdDialog)),
        __param(1, core_1.Inject(core_1.ViewContainerRef))
    ], DialogDemo);
    return DialogDemo;
}());
exports.DialogDemo = DialogDemo;
var JazzDialog = (function () {
    function JazzDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    JazzDialog = __decorate([
        core_1.Component({
            selector: 'demo-jazz-dialog',
            template: "\n  <p>It's Jazz!</p>\n  <p><label>How much? <input #howMuch></label></p>\n  <button type=\"button\" (click)=\"dialogRef.close(howMuch.value)\">Close dialog</button>"
        }),
        __param(0, core_1.Inject(material_1.MdDialogRef))
    ], JazzDialog);
    return JazzDialog;
}());
exports.JazzDialog = JazzDialog;


/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var GesturesDemo = (function () {
    function GesturesDemo() {
        this.dragCount = 0;
        this.panCount = 0;
        this.pressCount = 0;
        this.longpressCount = 0;
        this.swipeCount = 0;
        this.slideCount = 0;
    }
    GesturesDemo = __decorate([
        core_1.Component({
            selector: 'gestures-demo',
            templateUrl: 'src/gestures/gestures-demo.html',
            styleUrls: ['src/gestures/gestures-demo.css'],
        })
    ], GesturesDemo);
    return GesturesDemo;
}());
exports.GesturesDemo = GesturesDemo;


/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(38);
var GridListDemo = (function () {
    function GridListDemo() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.dogs = [
            { name: 'Porter', human: 'Kara' },
            { name: 'Mal', human: 'Jeremy' },
            { name: 'Koby', human: 'Igor' },
            { name: 'Razzle', human: 'Ward' },
            { name: 'Molly', human: 'Rob' },
            { name: 'Husi', human: 'Matias' },
        ];
        this.basicRowHeight = 80;
        this.fixedCols = 4;
        this.fixedRowHeight = 100;
        this.ratioGutter = 1;
        this.fitListHeight = '400px';
        this.ratio = '4:1';
    }
    GridListDemo.prototype.addTileCols = function () { this.tiles[2].cols++; };
    GridListDemo = __decorate([
        core_1.Component({
            selector: 'grid-list-demo',
            templateUrl: 'src/grid-list/grid-list-demo.html',
            styleUrls: ['src/grid-list/grid-list-demo.css'],
            providers: [material_1.MdIconRegistry]
        })
    ], GridListDemo);
    return GridListDemo;
}());
exports.GridListDemo = GridListDemo;


/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(38);
var IconDemo = (function () {
    function IconDemo(mdIconRegistry) {
        this.mdIconRegistry = mdIconRegistry;
        mdIconRegistry
            .addSvgIcon('thumb-up', 'src/icon/assets/thumbup-icon.svg')
            .addSvgIconSetInNamespace('core', 'src/icon/assets/core-icon-set.svg')
            .registerFontClassAlias('fontawesome', 'fa');
    }
    IconDemo = __decorate([
        core_1.Component({
            selector: 'md-icon-demo',
            templateUrl: 'src/icon/icon-demo.html',
            styleUrls: ['src/icon/icon-demo.css'],
            viewProviders: [material_1.MdIconRegistry],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __param(0, core_1.Inject(material_1.MdIconRegistry))
    ], IconDemo);
    return IconDemo;
}());
exports.IconDemo = IconDemo;


/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var max = 5;
var InputDemo = (function () {
    function InputDemo() {
        this.items = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 },
        ];
    }
    InputDemo.prototype.addABunch = function (n) {
        for (var x = 0; x < n; x++) {
            this.items.push({ value: ++max });
        }
    };
    InputDemo = __decorate([
        core_1.Component({
            selector: 'input-demo',
            templateUrl: 'src/input/input-demo.html',
            styleUrls: ['src/input/input-demo.css'],
        })
    ], InputDemo);
    return InputDemo;
}());
exports.InputDemo = InputDemo;


/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var ListDemo = (function () {
    function ListDemo() {
        this.items = [
            'Pepper',
            'Salt',
            'Paprika'
        ];
        this.contacts = [
            { name: 'Nancy', headline: 'Software engineer' },
            { name: 'Mary', headline: 'TPM' },
            { name: 'Bobby', headline: 'UX designer' }
        ];
        this.messages = [
            {
                from: 'Nancy',
                subject: 'Brunch?',
                message: 'Did you want to go on Sunday? I was thinking that might work.',
                image: 'https://angular.io/resources/images/bios/julie-ralph.jpg'
            },
            {
                from: 'Mary',
                subject: 'Summer BBQ',
                message: 'Wish I could come, but I have some prior obligations.',
                image: 'https://angular.io/resources/images/bios/juleskremer.jpg'
            },
            {
                from: 'Bobby',
                subject: 'Oui oui',
                message: 'Do you have Paris reservations for the 15th? I just booked!',
                image: 'https://angular.io/resources/images/bios/jelbourn.jpg'
            }
        ];
        this.links = [
            { name: 'Inbox' },
            { name: 'Outbox' },
            { name: 'Spam' },
            { name: 'Trash' }
        ];
        this.thirdLine = false;
        this.infoClicked = false;
    }
    ListDemo = __decorate([
        core_1.Component({
            selector: 'list-demo',
            templateUrl: 'src/list/list-demo.html',
            styleUrls: ['src/list/list-demo.css'],
        })
    ], ListDemo);
    return ListDemo;
}());
exports.ListDemo = ListDemo;


/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(38);
var LiveAnnouncerDemo = (function () {
    function LiveAnnouncerDemo(live) {
        this.live = live;
    }
    LiveAnnouncerDemo.prototype.announceText = function (message) {
        this.live.announce(message);
    };
    LiveAnnouncerDemo = __decorate([
        core_1.Component({
            selector: 'toolbar-demo',
            templateUrl: 'src/live-announcer/live-announcer-demo.html',
        }),
        __param(0, core_1.Inject(material_1.MdLiveAnnouncer))
    ], LiveAnnouncerDemo);
    return LiveAnnouncerDemo;
}());
exports.LiveAnnouncerDemo = LiveAnnouncerDemo;


/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var MenuDemo = (function () {
    function MenuDemo() {
        this.selected = '';
        this.items = [
            { text: 'Refresh' },
            { text: 'Settings' },
            { text: 'Help', disabled: true },
            { text: 'Sign Out' }
        ];
    }
    MenuDemo.prototype.select = function (text) { this.selected = text; };
    MenuDemo = __decorate([
        core_1.Component({
            selector: 'menu-demo',
            templateUrl: 'src/menu/menu-demo.html',
            styleUrls: ['src/menu/menu-demo.css'],
        })
    ], MenuDemo);
    return MenuDemo;
}());
exports.MenuDemo = MenuDemo;


/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(38);
var OverlayDemo = (function () {
    function OverlayDemo(overlay, viewContainerRef) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nextPosition = 0;
        this.isMenuOpen = false;
    }
    OverlayDemo.prototype.openRotiniPanel = function () {
        var config = new material_1.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .left(this.nextPosition + "px")
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(new material_1.ComponentPortal(RotiniPanel, this.viewContainerRef));
    };
    OverlayDemo.prototype.openFusilliPanel = function () {
        var config = new material_1.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
    };
    OverlayDemo.prototype.openSpaghettiPanel = function () {
        // TODO(jelbourn): separate overlay demo for connected positioning.
        var strategy = this.overlay.position()
            .connectedTo(this._overlayOrigin.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
        var config = new material_1.OverlayState();
        config.positionStrategy = strategy;
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(new material_1.ComponentPortal(SpagettiPanel, this.viewContainerRef));
    };
    __decorate([
        core_1.ViewChildren(material_1.TemplatePortalDirective)
    ], OverlayDemo.prototype, "templatePortals", void 0);
    __decorate([
        core_1.ViewChild(material_1.OverlayOrigin)
    ], OverlayDemo.prototype, "_overlayOrigin", void 0);
    OverlayDemo = __decorate([
        core_1.Component({
            selector: 'overlay-demo',
            templateUrl: 'src/overlay/overlay-demo.html',
            styleUrls: ['src/overlay/overlay-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __param(0, core_1.Inject(material_1.Overlay)),
        __param(1, core_1.Inject(core_1.ViewContainerRef))
    ], OverlayDemo);
    return OverlayDemo;
}());
exports.OverlayDemo = OverlayDemo;
/** Simple component to load into an overlay */
var RotiniPanel = (function () {
    function RotiniPanel() {
        this.value = 9000;
    }
    RotiniPanel = __decorate([
        core_1.Component({
            selector: 'rotini-panel',
            template: '<p class="demo-rotini">Rotini {{value}}</p>'
        })
    ], RotiniPanel);
    return RotiniPanel;
}());
exports.RotiniPanel = RotiniPanel;
/** Simple component to load into an overlay */
var SpagettiPanel = (function () {
    function SpagettiPanel() {
        this.value = 'Omega';
    }
    SpagettiPanel = __decorate([
        core_1.Component({
            selector: 'spagetti-panel',
            template: '<div class="demo-spagetti">Spagetti {{value}}</div>'
        })
    ], SpagettiPanel);
    return SpagettiPanel;
}());
exports.SpagettiPanel = SpagettiPanel;


/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(38);
var PortalDemo = (function () {
    function PortalDemo() {
    }
    Object.defineProperty(PortalDemo.prototype, "programmingJoke", {
        get: function () {
            return this.templatePortals.first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalDemo.prototype, "mathJoke", {
        get: function () {
            return this.templatePortals.last;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalDemo.prototype, "scienceJoke", {
        get: function () {
            return new material_1.ComponentPortal(ScienceJoke);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChildren(material_1.TemplatePortalDirective)
    ], PortalDemo.prototype, "templatePortals", void 0);
    PortalDemo = __decorate([
        core_1.Component({
            selector: 'portal-demo',
            templateUrl: 'src/portal/portal-demo.html',
            styleUrls: ['src/portal/portal-demo.css'],
        })
    ], PortalDemo);
    return PortalDemo;
}());
exports.PortalDemo = PortalDemo;
var ScienceJoke = (function () {
    function ScienceJoke() {
    }
    ScienceJoke = __decorate([
        core_1.Component({
            selector: 'science-joke',
            template: "<p> 100 kilopascals go into a bar. </p>"
        })
    ], ScienceJoke);
    return ScienceJoke;
}());
exports.ScienceJoke = ScienceJoke;


/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
// TODO(josephperrott): Add an automatically filling example progress bar.
var ProgressBarDemo = (function () {
    function ProgressBarDemo() {
        this.determinateProgressValue = 30;
        this.bufferProgressValue = 30;
        this.bufferBufferValue = 40;
    }
    ProgressBarDemo.prototype.stepDeterminateProgressVal = function (val) {
        this.determinateProgressValue += val;
    };
    ProgressBarDemo.prototype.stepBufferProgressVal = function (val) {
        this.bufferProgressValue += val;
    };
    ProgressBarDemo.prototype.stepBufferBufferVal = function (val) {
        this.bufferBufferValue += val;
    };
    ProgressBarDemo = __decorate([
        core_1.Component({
            selector: 'progress-bar-demo',
            templateUrl: 'src/progress-bar/progress-bar-demo.html',
            styleUrls: ['src/progress-bar/progress-bar-demo.css'],
        })
    ], ProgressBarDemo);
    return ProgressBarDemo;
}());
exports.ProgressBarDemo = ProgressBarDemo;


/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var ProgressCircleDemo = (function () {
    function ProgressCircleDemo() {
        this.progressValue = 40;
    }
    ProgressCircleDemo.prototype.step = function (val) {
        this.progressValue += val;
    };
    ProgressCircleDemo = __decorate([
        core_1.Component({
            selector: 'progress-circle-demo',
            templateUrl: 'src/progress-circle/progress-circle-demo.html',
            styleUrls: ['src/progress-circle/progress-circle-demo.css'],
        })
    ], ProgressCircleDemo);
    return ProgressCircleDemo;
}());
exports.ProgressCircleDemo = ProgressCircleDemo;


/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var RadioDemo = (function () {
    function RadioDemo() {
        this.isDisabled = false;
        this.isAlignEnd = false;
        this.favoriteSeason = 'Autumn';
        this.seasonOptions = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    RadioDemo = __decorate([
        core_1.Component({
            selector: 'radio-demo',
            templateUrl: 'src/radio/radio-demo.html',
            styleUrls: ['src/radio/radio-demo.css'],
        })
    ], RadioDemo);
    return RadioDemo;
}());
exports.RadioDemo = RadioDemo;


/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(38);
var RippleDemo = (function () {
    function RippleDemo() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
        this.rounded = false;
        this.maxRadius = null;
        this.rippleSpeed = 1;
        this.rippleColor = '';
        this.rippleBackgroundColor = '';
        this.disableButtonRipples = false;
    }
    RippleDemo.prototype.doManualRipple = function () {
        var _this = this;
        if (this.manualRipple) {
            window.setTimeout(function () { return _this.manualRipple.start(); }, 10);
            window.setTimeout(function () { return _this.manualRipple.end(0, 0); }, 500);
        }
    };
    __decorate([
        core_1.ViewChild(material_1.MdRipple)
    ], RippleDemo.prototype, "manualRipple", void 0);
    RippleDemo = __decorate([
        core_1.Component({
            selector: 'ripple-demo',
            templateUrl: 'src/ripple/ripple-demo.html',
            styleUrls: ['src/ripple/ripple-demo.css'],
        })
    ], RippleDemo);
    return RippleDemo;
}());
exports.RippleDemo = RippleDemo;


/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var SelectDemo = (function () {
    function SelectDemo() {
    }
    SelectDemo = __decorate([
        core_1.Component({
            selector: 'select-demo',
            templateUrl: 'src/select/select-demo.html',
            styleUrls: ['src/select/select-demo.css'],
        })
    ], SelectDemo);
    return SelectDemo;
}());
exports.SelectDemo = SelectDemo;


/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var SidenavDemo = (function () {
    function SidenavDemo() {
    }
    SidenavDemo = __decorate([
        core_1.Component({
            selector: 'sidenav/sidenav-demo',
            templateUrl: 'src/sidenav/sidenav-demo.html',
            styleUrls: ['src/sidenav/sidenav-demo.css'],
        })
    ], SidenavDemo);
    return SidenavDemo;
}());
exports.SidenavDemo = SidenavDemo;


/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var SlideToggleDemo = (function () {
    function SlideToggleDemo() {
    }
    SlideToggleDemo.prototype.onFormSubmit = function () {
        alert("You submitted the form.");
    };
    SlideToggleDemo = __decorate([
        core_1.Component({
            selector: 'switch-demo',
            templateUrl: 'src/slide-toggle/slide-toggle-demo.html',
            styleUrls: ['src/slide-toggle/slide-toggle-demo.css'],
        })
    ], SlideToggleDemo);
    return SlideToggleDemo;
}());
exports.SlideToggleDemo = SlideToggleDemo;


/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var SliderDemo = (function () {
    function SliderDemo() {
    }
    SliderDemo = __decorate([
        core_1.Component({
            selector: 'slider-demo',
            templateUrl: 'src/slider/slider-demo.html',
        })
    ], SliderDemo);
    return SliderDemo;
}());
exports.SliderDemo = SliderDemo;


/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var material_1 = __webpack_require__(38);
var SnackBarDemo = (function () {
    function SnackBarDemo(snackBar, viewContainerRef) {
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.message = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = false;
    }
    SnackBarDemo.prototype.open = function () {
        var config = new material_1.MdSnackBarConfig(this.viewContainerRef);
        this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
    };
    SnackBarDemo = __decorate([
        core_1.Component({
            selector: 'snack-bar-demo',
            templateUrl: 'src/snack-bar/snack-bar-demo.html',
        }),
        __param(0, core_1.Inject(material_1.MdSnackBar)),
        __param(1, core_1.Inject(core_1.ViewContainerRef))
    ], SnackBarDemo);
    return SnackBarDemo;
}());
exports.SnackBarDemo = SnackBarDemo;
var DemoSnack = (function () {
    function DemoSnack() {
    }
    DemoSnack = __decorate([
        core_1.Component({
            selector: 'demo-snack',
            templateUrl: 'src/snack-bar/snack-bar-demo.html',
            styleUrls: ['src/snack-bar/snack-bar-demo.css'],
        })
    ], DemoSnack);
    return DemoSnack;
}());
exports.DemoSnack = DemoSnack;


/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(4);
var TabsDemo = (function () {
    function TabsDemo() {
        var _this = this;
        this.tabs = [
            { label: 'Tab One', content: 'This is the body of the first tab' },
            { label: 'Tab Two', content: 'This is the body of the second tab' },
            { label: 'Tab Three', content: 'This is the body of the third tab' },
        ];
        this.asyncTabs = Observable_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(_this.tabs);
            }, 1000);
        });
    }
    TabsDemo = __decorate([
        core_1.Component({
            selector: 'tab-group-demo',
            templateUrl: 'src/tabs/tab-group-demo.html',
            styleUrls: ['src/tabs/tab-group-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        })
    ], TabsDemo);
    return TabsDemo;
}());
exports.TabsDemo = TabsDemo;


/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var ToolbarDemo = (function () {
    function ToolbarDemo() {
    }
    ToolbarDemo = __decorate([
        core_1.Component({
            selector: 'toolbar-demo',
            templateUrl: 'src/toolbar/toolbar-demo.html',
            styleUrls: ['src/toolbar/toolbar-demo.css'],
        })
    ], ToolbarDemo);
    return ToolbarDemo;
}());
exports.ToolbarDemo = ToolbarDemo;


/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var TooltipDemo = (function () {
    function TooltipDemo() {
        this.position = 'below';
    }
    TooltipDemo = __decorate([
        core_1.Component({
            selector: 'tooltip-demo',
            templateUrl: 'src/tooltip/tooltip-demo.html',
            styleUrls: ['src/tooltip/tooltip-demo.css'],
        })
    ], TooltipDemo);
    return TooltipDemo;
}());
exports.TooltipDemo = TooltipDemo;


/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(71);
var http_1 = __webpack_require__(113);
var forms_1 = __webpack_require__(60);
var demo_app_1 = __webpack_require__(441);
var router_1 = __webpack_require__(261);
var material_1 = __webpack_require__(38);
var routes_1 = __webpack_require__(820);
var progress_bar_demo_1 = __webpack_require__(452);
var dialog_demo_1 = __webpack_require__(442);
var ripple_demo_1 = __webpack_require__(455);
var icon_demo_1 = __webpack_require__(445);
var gestures_demo_1 = __webpack_require__(443);
var input_demo_1 = __webpack_require__(446);
var card_demo_1 = __webpack_require__(439);
var radio_demo_1 = __webpack_require__(454);
var button_toggle_demo_1 = __webpack_require__(437);
var progress_circle_demo_1 = __webpack_require__(453);
var tooltip_demo_1 = __webpack_require__(463);
var list_demo_1 = __webpack_require__(447);
var baseline_demo_1 = __webpack_require__(436);
var grid_list_demo_1 = __webpack_require__(444);
var live_announcer_demo_1 = __webpack_require__(448);
var overlay_demo_1 = __webpack_require__(450);
var slide_toggle_demo_1 = __webpack_require__(458);
var toolbar_demo_1 = __webpack_require__(462);
var button_demo_1 = __webpack_require__(438);
var checkbox_demo_1 = __webpack_require__(440);
var select_demo_1 = __webpack_require__(456);
var slider_demo_1 = __webpack_require__(459);
var sidenav_demo_1 = __webpack_require__(457);
var snack_bar_demo_1 = __webpack_require__(460);
var portal_demo_1 = __webpack_require__(451);
var menu_demo_1 = __webpack_require__(449);
var tab_group_demo_1 = __webpack_require__(461);
var platform_browser_dynamic_1 = __webpack_require__(114);
var DemoAppModule = (function () {
    function DemoAppModule() {
    }
    DemoAppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes_1.DEMO_APP_ROUTES, { useHash: true }),
                material_1.MaterialModule.forRoot(),
            ],
            declarations: [
                baseline_demo_1.BaselineDemo,
                button_demo_1.ButtonDemo,
                button_toggle_demo_1.ButtonToggleDemo,
                card_demo_1.CardDemo,
                checkbox_demo_1.CheckboxDemo,
                demo_app_1.DemoApp,
                dialog_demo_1.DialogDemo,
                gestures_demo_1.GesturesDemo,
                grid_list_demo_1.GridListDemo,
                demo_app_1.Home,
                icon_demo_1.IconDemo,
                input_demo_1.InputDemo,
                dialog_demo_1.JazzDialog,
                list_demo_1.ListDemo,
                live_announcer_demo_1.LiveAnnouncerDemo,
                checkbox_demo_1.MdCheckboxDemoNestedChecklist,
                menu_demo_1.MenuDemo,
                snack_bar_demo_1.SnackBarDemo,
                overlay_demo_1.OverlayDemo,
                portal_demo_1.PortalDemo,
                progress_bar_demo_1.ProgressBarDemo,
                progress_circle_demo_1.ProgressCircleDemo,
                radio_demo_1.RadioDemo,
                ripple_demo_1.RippleDemo,
                overlay_demo_1.RotiniPanel,
                portal_demo_1.ScienceJoke,
                select_demo_1.SelectDemo,
                sidenav_demo_1.SidenavDemo,
                slider_demo_1.SliderDemo,
                slide_toggle_demo_1.SlideToggleDemo,
                overlay_demo_1.SpagettiPanel,
                tab_group_demo_1.TabsDemo,
                toolbar_demo_1.ToolbarDemo,
                tooltip_demo_1.TooltipDemo,
            ],
            entryComponents: [
                demo_app_1.DemoApp,
                dialog_demo_1.JazzDialog,
                overlay_demo_1.RotiniPanel,
                portal_demo_1.ScienceJoke,
                overlay_demo_1.SpagettiPanel,
            ],
            bootstrap: [demo_app_1.DemoApp],
        })
    ], DemoAppModule);
    return DemoAppModule;
}());
exports.DemoAppModule = DemoAppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(DemoAppModule);


/***/ },

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var demo_app_1 = __webpack_require__(441);
var button_demo_1 = __webpack_require__(438);
var baseline_demo_1 = __webpack_require__(436);
var button_toggle_demo_1 = __webpack_require__(437);
var tab_group_demo_1 = __webpack_require__(461);
var grid_list_demo_1 = __webpack_require__(444);
var gestures_demo_1 = __webpack_require__(443);
var live_announcer_demo_1 = __webpack_require__(448);
var list_demo_1 = __webpack_require__(447);
var icon_demo_1 = __webpack_require__(445);
var toolbar_demo_1 = __webpack_require__(462);
var input_demo_1 = __webpack_require__(446);
var checkbox_demo_1 = __webpack_require__(440);
var overlay_demo_1 = __webpack_require__(450);
var portal_demo_1 = __webpack_require__(451);
var progress_bar_demo_1 = __webpack_require__(452);
var progress_circle_demo_1 = __webpack_require__(453);
var select_demo_1 = __webpack_require__(456);
var sidenav_demo_1 = __webpack_require__(457);
var slide_toggle_demo_1 = __webpack_require__(458);
var slider_demo_1 = __webpack_require__(459);
var radio_demo_1 = __webpack_require__(454);
var card_demo_1 = __webpack_require__(439);
var menu_demo_1 = __webpack_require__(449);
var ripple_demo_1 = __webpack_require__(455);
var dialog_demo_1 = __webpack_require__(442);
var tooltip_demo_1 = __webpack_require__(463);
var snack_bar_demo_1 = __webpack_require__(460);
exports.DEMO_APP_ROUTES = [
    { path: '', component: demo_app_1.Home },
    { path: 'button', component: button_demo_1.ButtonDemo },
    { path: 'card', component: card_demo_1.CardDemo },
    { path: 'radio', component: radio_demo_1.RadioDemo },
    { path: 'select', component: select_demo_1.SelectDemo },
    { path: 'sidenav', component: sidenav_demo_1.SidenavDemo },
    { path: 'slide-toggle', component: slide_toggle_demo_1.SlideToggleDemo },
    { path: 'slider', component: slider_demo_1.SliderDemo },
    { path: 'progress-circle', component: progress_circle_demo_1.ProgressCircleDemo },
    { path: 'progress-bar', component: progress_bar_demo_1.ProgressBarDemo },
    { path: 'portal', component: portal_demo_1.PortalDemo },
    { path: 'overlay', component: overlay_demo_1.OverlayDemo },
    { path: 'checkbox', component: checkbox_demo_1.CheckboxDemo },
    { path: 'input', component: input_demo_1.InputDemo },
    { path: 'toolbar', component: toolbar_demo_1.ToolbarDemo },
    { path: 'icon', component: icon_demo_1.IconDemo },
    { path: 'list', component: list_demo_1.ListDemo },
    { path: 'menu', component: menu_demo_1.MenuDemo },
    { path: 'live-announcer', component: live_announcer_demo_1.LiveAnnouncerDemo },
    { path: 'gestures', component: gestures_demo_1.GesturesDemo },
    { path: 'grid-list', component: grid_list_demo_1.GridListDemo },
    { path: 'tabs', component: tab_group_demo_1.TabsDemo },
    { path: 'button-toggle', component: button_toggle_demo_1.ButtonToggleDemo },
    { path: 'baseline', component: baseline_demo_1.BaselineDemo },
    { path: 'ripple', component: ripple_demo_1.RippleDemo },
    { path: 'dialog', component: dialog_demo_1.DialogDemo },
    { path: 'tooltip', component: tooltip_demo_1.TooltipDemo },
    { path: 'snack-bar', component: snack_bar_demo_1.SnackBarDemo },
];


/***/ },

/***/ 821:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var platform_browser_dynamic_1 = __webpack_require__(114);
var demo_app_module_ts_1 = __webpack_require__(469);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(demo_app_module_ts_1.DemoAppModule);


/***/ }

},[821]);
//# sourceMappingURL=bundle.js.map