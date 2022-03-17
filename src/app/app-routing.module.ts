import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './moduls/pages/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'buy-apartment/tehran', pathMatch: 'full' },
  {path:'buy-apartment/:city' ,component:MainComponent ,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
