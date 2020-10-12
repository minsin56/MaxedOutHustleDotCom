import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainSideNavComponent } from './Components/main-side-nav/main-side-nav.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import {RouterModule} from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

const Material =
[
  MatSliderModule,
  MatToolbarModule,
  MatSidenavModule
];

const Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainSideNavComponent,
    NotFoundComponent,
    HomePageComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material,
    RouterModule.forRoot(Routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
