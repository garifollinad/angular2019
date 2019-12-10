import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './presentation/home-page/home-page.component';
import { AboutUsComponent } from './presentation/about-us/about-us.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JsonParser, SortByPipe} from './presentation/home-page/JsonParser';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { AnimationComponent } from './shared/animation/animation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CountriesComponent } from './presentation/countries/countries.component';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import {AuthInterceptor} from './AuthInterceptor';
import { DetailsComponent } from './presentation/details/details.component';
import {BarRatingModule} from 'ngx-bar-rating';
import {RatingModule} from "ng-starrating";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    JsonParser,
    SortByPipe,
    DropdownDirective,
    HighlightDirective,
    AnimationComponent,
    CountriesComponent,
    NotFoundPageComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RatingModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2OrderModule,
    BarRatingModule
  ],
  entryComponents: [AnimationComponent],
  providers: [AppModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
