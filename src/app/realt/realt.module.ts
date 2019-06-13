import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealtRoutingModule } from './realt-routing.module';
import { RealtComponent } from './realt.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [RealtComponent],
  imports: [
    CommonModule,
    RealtRoutingModule,
    FormsModule
  ]
})
export class RealtModule { }
