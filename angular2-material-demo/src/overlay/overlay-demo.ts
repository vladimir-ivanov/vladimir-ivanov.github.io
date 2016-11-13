import {
    Component,
    ViewChildren,
    QueryList,
    ViewEncapsulation,
    ViewChild,
    ViewContainerRef, Inject,
} from '@angular/core';
import {
    Overlay,
    OverlayState,
    OverlayOrigin,
    ComponentPortal,
    Portal,
    TemplatePortalDirective,
} from '@angular/material';


@Component({
    selector: 'overlay-demo',
    templateUrl: 'src/overlay/overlay-demo.html',
    styleUrls: ['src/overlay/overlay-demo.css'],
    encapsulation: ViewEncapsulation.None,
})
export class OverlayDemo {
    nextPosition: number = 0;
    isMenuOpen: boolean = false;

    @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;
    @ViewChild(OverlayOrigin) _overlayOrigin: OverlayOrigin;

    constructor(@Inject(Overlay) private overlay, @Inject(ViewContainerRef) private viewContainerRef) {
    }

    openRotiniPanel() {
        let config = new OverlayState();

        config.positionStrategy = this.overlay.position()
            .global()
            .left(`${this.nextPosition}px`)
            .top(`${this.nextPosition}px`);

        this.nextPosition += 30;

        let overlayRef = this.overlay.create(config);
        overlayRef.attach(new ComponentPortal(RotiniPanel, this.viewContainerRef));
    }

    openFusilliPanel() {
        let config = new OverlayState();

        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(`${this.nextPosition}px`);

        this.nextPosition += 30;

        let overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
    }

    openSpaghettiPanel() {
        // TODO(jelbourn): separate overlay demo for connected positioning.
        let strategy = this.overlay.position()
            .connectedTo(
                this._overlayOrigin.elementRef,
                {originX: 'start', originY: 'bottom'},
                {overlayX: 'start', overlayY: 'top'});

        let config = new OverlayState();
        config.positionStrategy = strategy;

        let overlayRef = this.overlay.create(config);
        overlayRef.attach(new ComponentPortal(SpagettiPanel, this.viewContainerRef));
    }
}

/** Simple component to load into an overlay */
@Component({

    selector: 'rotini-panel',
    template: '<p class="demo-rotini">Rotini {{value}}</p>'
})
export class RotiniPanel {
    value: number = 9000;
}

/** Simple component to load into an overlay */
@Component({
    selector: 'spagetti-panel',
    template: '<div class="demo-spagetti">Spagetti {{value}}</div>'
})
export class SpagettiPanel {
    value: string = 'Omega';
}
