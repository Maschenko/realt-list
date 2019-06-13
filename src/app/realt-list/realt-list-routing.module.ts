import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RealtListComponent} from './realt-list.component';

const routes: Routes = [
  { path: 'list', component: RealtListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealtListRoutingModule { }
