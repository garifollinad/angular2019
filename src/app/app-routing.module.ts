import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './presentation/home-page/home-page.component';
import {AboutUsComponent} from './presentation/about-us/about-us.component';
import {AnimationComponent} from './shared/animation/animation.component';
import {CountriesComponent} from './presentation/countries/countries.component';
import {NotFoundPageComponent} from './shared/not-found-page/not-found-page.component';
import {DetailsComponent} from "./presentation/details/details.component";
import {ImageresolverService} from "./shared/service/imageresolver.service";


const routes: Routes = [
  { path: '', loadChildren: () => import('./presentation/auth/auth.module').then(mod => mod.AuthModule)},
  { path: 'home-page', component: HomePageComponent },
  { path: 'image/:id', component: DetailsComponent, resolve: { images: ImageresolverService } },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'countries', component: CountriesComponent },
  { path: '404', component: NotFoundPageComponent },
  {path: '**', redirectTo: '404',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [ImageresolverService]
})
export class AppRoutingModule {
}
