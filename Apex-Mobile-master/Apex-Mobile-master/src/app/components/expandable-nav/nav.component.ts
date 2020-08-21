import { Component, EventEmitter, Output, Host } from '@angular/core';
import { navAnimations } from "./animations/nav.menu.animations";
import { navLinkAnimations } from "./animations/nav.link.animations";
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector : 'mobile-nav',
  animations: [navAnimations(), navLinkAnimations()],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class MobileNavComponent {
  @Output() navEmit = new EventEmitter();
  @Output() navToggled = new EventEmitter();
  routes: { href: string, name: string, state: string}[];
  initted: boolean = false;
  navstate: string = "closed";
  currentroute: string;

  constructor(private router: Router, private activeroute: ActivatedRoute ) {
    this.routes = [
      { href: "/home", name: "HOME", state: "inactive"},
      { href: "/apex-difference", name: "APEX DIFFERENCE", state: "inactive"},
      { href: "/services", name: "SERVICES", state: "inactive"},
      { href: "/about", name: "ABOUT US", state: "inactive"},
      { href: "/portfolio", name: "PORTFOLIO", state: "inactive"},
      { href: "/contact", name: "CONTACT", state: "inactive"}
    ];

    this.currentroute = this.routes[0].name;
  };

  toggleNav() {
    this.navstate = this.navstate === 'closed' ? 'opened' : 'closed';
    this.navToggled.emit({value: this.navstate});
    console.log(this.activeroute.root);
    console.log(this.router);
  };

  changeState(element, i) {
    element[i].state = element[i].state === 'active' ? 'inactive' : 'active';
    i++;
    setTimeout(() => {
      if (i < element.length) {
        this.changeState(this.routes, i);
      }
    }, 50);
  };

  animateLinks() {
    if (!this.initted) {
      this.initted = true;
      return;
    }
    this.changeState(this.routes, 0);
  };

  navInit(route) {
    if (route.name === this.currentroute) {
      this.toggleNav();
      return;
    }
    this.currentroute = route.name;
    this.navEmit.emit({
      value: "loading"
    });
    setTimeout(() => { this.router.navigateByUrl(route.href) }, 300);
    this.toggleNav();
  };
}


