import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealtListRoutingModule } from './realt-list-routing.module';
import {PagerService} from '../shared/pager.service';

@NgModule({
  imports: [
    CommonModule,
    RealtListRoutingModule
  ],
  providers: [PagerService]
})
export class RealtListModule { }
