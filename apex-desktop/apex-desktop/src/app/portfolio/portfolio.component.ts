import { Component, OnInit, Host } from '@angular/core';
import { AppComponent } from '../app.component';
import { overlayAnimations } from '../app-animations/view.overlay.animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [ overlayAnimations() ]
})
export class PortfolioComponent implements OnInit {
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

  ngOnInit() {
  }

}
