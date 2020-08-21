import {Component, OnInit, Host} from '@angular/core';
import { AppComponent } from '../app.component';
import { flyinHigh } from "./services.animations";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  animations: [ flyinHigh() ]
})
export class ServicesComponent implements OnInit {
  appref: any;
  private services : {};
  private view : number;
  private serviced : number;
  private hi : boolean;

  constructor(@Host() app: AppComponent) {
    this.hi = true;
    this.appref = app;
    this.view = 2;
    this.services = [
      { "section" : "PRE PRODUCTION",
        "switch" : 1,
        "offerings" : [
          {
            "name" : "360 Set Design",
            "img" : "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/3.+VR+preproduction/7.-VR-preproduction+1+360+set+design.jpeg",
            "text" : "We pay special attention to the set design we provide for your 360 content, as all angles of the scene are captured and play a role in telling your story."
          },
          {
            "name" : "360 Location Scouting",
            "img" : "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/3.+VR+preproduction/8.-VR-preproduction-2-360-location-scouting.jpeg",
            "text" : "Location scouting is an integral part of the traditional video production process, and 360 content is no exception."
          },
          {
            "name" : "Script Writing for 360 VR",
            "img" : "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/3.+VR+preproduction/9.-VR-preproduction-3-Script-writing-for-360-VR.jpeg",
            "text" : "Telling a great story is always important no matter what medium you choose. However, when shooting VR content the methods of storytelling are re-invented. We provide a unique perspective on how you can tell your story in virtual reality, whether it's based on fictional or non-fictional content."
          }
        ]
      },
      { "section" : "PRODUCTION",
        "switch" : 2,
        "offerings" : [
          {
            "name" : "Moving and Static Camera Rigs",
            "img" : "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/1.+VR+prodution/1.+VR+production+1+Moving+and+static+camera+rigs.jpeg",
            "text" : "We specialize in the highest quality live action 360 VR capture for any application. We have invested and mastered camera systems with no blind spots, 8K+ resolutions, and minimal to zero seam lines in our footage."
          },
          {
            "name" : "Ariel 360 Video and Photo Capture",
            "img" : "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/1.+VR+prodution/2.+VR-production+2+Aerial-360-video-and-photo-capture.jpeg",
            "text" : "Take VR live action capture to new heights with our custom made aerial VR drones. Allowing you to capture incredible bird eye views for any imaginable application."
          },
          {
            "name" : "All Weather 360 Photo/Video Capture",
            "img" : "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/1.+VR+prodution/3.+VR-production+3+All-Weather-360-photovideo-capture.jpeg",
            "text" : "We’re equipped with VR live action cameras that can capture footage in weather conditions such as snow, jet skiing, and other extreme situations."
          }
        ]
      },
      { "section" : "POST PRODUCTION",
        "switch" : 3,
        "offerings" : [
          {
            "name" : "360 Visual Effects",
            "img" : "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/2.+VR+post+production/4.+VR-post-production+1-360-Visual-Effects.jpeg",
            "text" : "Take your 360 VR footage to the next level by adding advanced visual elements to your story like text, on screen graphics, advanced tracking, and particle effects."
          },
          {
            "name" : "360 Video and Photo Stitching",
            "img" : "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/2.+VR+post+production/5.-VR-post-production-2-360-video-and-photo-stitching-services.jpeg",
            "text" : "If you’ve captured VR footage but you’re having problems creating a good stitch, we can help you with our team of video/photo stitching specialists."
          },
          {
            "name" : "360 Sound Design",
            "img" : "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/2.+VR+post+production/6.-VR-post-production+3-360-sound-design.jpeg",
            "text" : "Create an even more immersive experience for your viewers by adding 360 sound design."
          }
        ]
      },
      { "section" : "LIVE 360 STREAMING",
        "switch" : 4,
        "offerings" : [
          {
            "name" : "Live 360 Web Streaming",
            "img" : "https://s3-us-west-1.amazonaws.com/apex360vr/SERVICES+IMAGES/4.+Live+Streaming/10.+Live+Streaming+-+Live+360+web+streaming",
            "text" : "Apex provides live streaming 360 video for live broadcast applications, wireless client monitors, and any situation where VR content needs to be streamed live."
          }
        ]
      }
    ];
  }

  loaded() {
    setTimeout(() => { this.appref.loadstate = "loaded"; }, 1000);
  }

  setSwitch(servicenumber) {
    this.serviced = servicenumber;
  }

  ngOnInit() {

  }

}
