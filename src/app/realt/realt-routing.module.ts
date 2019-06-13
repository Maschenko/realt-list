import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RealtComponent} from './realt.component';

const routes: Routes = [
  { path: 'realt', component: RealtComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealtRoutingModule { }
