import {Component, Inject} from '@angular/core';
import {MdLiveAnnouncer} from '@angular/material';

@Component({
  selector: 'toolbar-demo',
  templateUrl: 'src/live-announcer/live-announcer-demo.html',
})
export class LiveAnnouncerDemo {

  constructor(@Inject(MdLiveAnnouncer) private live) {}

  announceText(message: string) {
    this.live.announce(message);
  }

}
