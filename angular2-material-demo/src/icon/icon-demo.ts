import {Component, ViewEncapsulation, Inject} from '@angular/core';
import {MdIconRegistry} from '@angular/material';

@Component({
    selector: 'md-icon-demo',
    templateUrl: 'src/icon/icon-demo.html',
    styleUrls: ['src/icon/icon-demo.css'],
    viewProviders: [MdIconRegistry],
    encapsulation: ViewEncapsulation.None,
})
export class IconDemo {
    constructor(@Inject(MdIconRegistry) private mdIconRegistry) {
        mdIconRegistry
            .addSvgIcon('thumb-up', 'src/icon/assets/thumbup-icon.svg')
            .addSvgIconSetInNamespace('core', 'src/icon/assets/core-icon-set.svg')
            .registerFontClassAlias('fontawesome', 'fa');
    }
}
