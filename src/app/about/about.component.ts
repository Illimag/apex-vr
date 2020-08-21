import {Component, OnInit, Host} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private appref: any;
  private abouttext : string;
  private aboutinfo: number;

  constructor(@Host() app: AppComponent) {
    this.appref = app;
    this.abouttext  = "In early 2016, when 20th Century Fox approached us to create a 360 VR ad for the Deadpool film’s Facebook page, " +
      "we were taken into a whole new world of filmmaking. We were already working as advertising filmmakers, " +
      "focused on providing the highest quality video content to our customers ranging from startups to fortune 500 companies. " +
      "Since then, we have worked within this new world to create unique pieces for a number of companies looking for a creative " +
      "new way to present their products and services. We see 360 VR as the perfect way to ensure that your brand stands out, " +
      "so we are excited to now offer our 360 VR services exclusively through Apex 360 VR for customers " +
      "who, like us, value the opportunity to use this innovative new medium to tell their stories.";
    this.aboutinfo = 0;
  }

  loaded() {
    setTimeout(() => { this.appref.loadstate = "loaded"; }, 1000);
  }

  toggleAbout(val) {
    this.aboutinfo = val;
  }

  ngOnInit() {
  }

}
