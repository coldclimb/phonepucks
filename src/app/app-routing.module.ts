import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SuccessComponent } from './store/checkout/success/success.component';
import { CancelComponent } from './store/checkout/cancel/cancel.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'store', component: StoreComponent},
  { path: 'about', component: AboutComponent},
  { path: 'success', component: SuccessComponent},
  { path: 'cancel', component: CancelComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
