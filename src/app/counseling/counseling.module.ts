import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounselingRoutingModule } from './counseling-routing.module';
import { CounselingComponent } from './counseling.component'

@NgModule({
  declarations: [CounselingComponent],
  imports: [
    CommonModule,
    CounselingRoutingModule
  ]
})
export class CounselingModule { }
