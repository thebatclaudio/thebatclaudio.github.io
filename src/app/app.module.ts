import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    PageNotFoundComponent,
    MenuComponentComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Import ParticlesModule