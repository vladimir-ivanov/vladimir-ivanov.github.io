import {Component, ViewChildren, QueryList} from '@angular/core';
import {
    Portal,
    ComponentPortal,
    TemplatePortalDirective,
} from '@angular/material';


@Component({
    selector: 'portal-demo',
    templateUrl: 'src/portal/portal-demo.html',
    styleUrls: ['src/portal/portal-demo.css'],
})
export class PortalDemo {
    @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;

    selectedPortal: Portal<any>;

    get programmingJoke() {
        return this.templatePortals.first;
    }

    get mathJoke() {
        return this.templatePortals.last;
    }

    get scienceJoke() {
        return new ComponentPortal(ScienceJoke);
    }
}


@Component({
    selector: 'science-joke',
    template: `<p> 100 kilopascals go into a bar. </p>`
})
export class ScienceJoke {
}
