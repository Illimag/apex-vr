import {Component, OnInit, Host} from '@angular/core';
import { AppComponent } from '../app.component';
import { overlayAnimations } from '../app-animations/view.overlay.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [ overlayAnimations() ]
})
export class ContactComponent implements OnInit {
  private appref: any;
  private navstate: string = "closed";
  private contactinfo: number;

  constructor(@Host() app: AppComponent) {
    this.appref = app;
    this.contactinfo = 0;
  }

  loaded() {
    setTimeout(() => { this.appref.loadstate = "loaded"; }, 1000);
  }

  toggleShowContent() {
    this.navstate = this.navstate === 'closed' ? 'opened' : 'closed';
  }

  toggleContact(val) {
    this.contactinfo = val;
  }

  ngOnInit() {

  }
}
