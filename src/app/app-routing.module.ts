import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutUsComponent} from './about-us/about-us.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)},
  { path: 'home-page', component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
