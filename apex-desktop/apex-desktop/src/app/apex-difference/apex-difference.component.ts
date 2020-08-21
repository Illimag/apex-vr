import {Component, OnInit, Host} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-apex-difference',
  templateUrl: './apex-difference.component.html',
  styleUrls: ['./apex-difference.component.scss']
})
export class ApexDifferenceComponent implements OnInit {
  appref: any;
  private differencetext : string;

  constructor(@Host() app: AppComponent) {
    this.appref = app;
    this.differencetext  = "We are a group of passionate, forward thinking filmmakers, determined to move the 360 VR " +
      "format forward. Having been on the forefront of this emerging art form, we have been working " +
      "within the community to create a filmmaking language, and push the boundaries " +
      "of what is possible and acceptable within this new medium. As such, " +
      "we have been and continue to use our skills and creativity to create the most " +
      "engaging video experiences for: narratives, advertisements, documentaries and corporate videos.";
  }

  loaded() {
    setTimeout(() => { this.appref.loadstate = "loaded"; }, 1000);
  }

  ngOnInit() {
  }

}
