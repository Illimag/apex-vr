import {Component, OnInit, Host} from '@angular/core';
import { AppComponent } from '../app.component';
import { overlayAnimations } from '../app-animations/view.overlay.animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [ overlayAnimations() ]
})
export class HomePageComponent implements OnInit {
  appref: any;
  navstate: string = "closed";

  constructor(@Host() app: AppComponent) {
    this.appref = app;
  };

  loaded() {
    console.log("loaded");
    this.appref.loadstate = "loaded";
  }

  toggleContent() {
    console.log("vrmode");
    this.navstate = this.navstate === 'closed' ? 'opened' : 'closed';
  }

  ngOnInit() {}
}
