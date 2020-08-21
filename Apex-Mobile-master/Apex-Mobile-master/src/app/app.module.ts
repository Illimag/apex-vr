import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MdButtonModule, MdRippleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ApexDifferenceComponent } from './apex-difference/apex-difference.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MobileNavComponent } from './components/expandable-nav/nav.component';
import { LeadFormComponent } from './components/form/form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'apex-difference',
    component: ApexDifferenceComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ApexDifferenceComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    LeadFormComponent,
    MobileNavComponent,
    PortfolioComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    MdButtonModule,
    MdRippleModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
