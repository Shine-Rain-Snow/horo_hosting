import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { CounselingRoutingModule } from './counseling-routing.module';
import { CounselingComponent } from './counseling.component'

@NgModule({
  declarations: [CounselingComponent],
  imports: [
    CommonModule,
    CounselingRoutingModule,
    FormsModule
  ]
})
export class CounselingModule { }
