import { Component } from '@angular/core';
import { navAnimations } from './app-animations/nav.animations';
import { visibilityAnimations } from './app-animations/visibility.animations';
import { visibilityLogoAnimations } from './app-animations/visibility.animation.logo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ navAnimations(), visibilityAnimations(), visibilityLogoAnimations()   ]
})
export class AppComponent {
  loadstate: string = "loading";
  touchstate: string = "hide";
  routes: { href: string, name: string, state: string}[];
  currentroute: string;
  whitelogo: string = "whiteshow";
  bluelogo: string = "bluehide";
  home: any;


  constructor(private router: Router ) {
  this.routes = [
      { href: "/apex-difference", name: "THE APEX DIFFERENCE", state: "inactive"},
      { href: "/services", name: "SERVICES", state: "inactive"},
      { href: "/about", name: "ABOUT US", state: "inactive"},
      { href: "/portfolio", name: "PORTFOLIO", state: "inactive"},
      { href: "/contact", name: "CONTACT", state: "inactive"}
    ];

    this.home = { href: "/home", name: "HOME", state: "inactive"}

    this.currentroute = this.home.name;
  };

  navInit(route) {
    if (route.name === this.currentroute) {
      return;
    }
    this.currentroute = route.name;
    this.loadstate = "loading";
    setTimeout(() => { this.router.navigateByUrl(route.href) }, 300);
  };

  toggleTouchInfo() {
    this.touchstate = this.touchstate === 'hide' ? 'show' : 'hide';
  }

  toggleLogo() {
    this.bluelogo = this.bluelogo === 'bluehide' ? 'blueshow' : 'bluehide';
    this.whitelogo = this.whitelogo === 'whitehide' ? 'whiteshow' : 'whitehide';
  }
}
