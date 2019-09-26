import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';

@NgModule({
  declarations: [IntroComponent],
  imports: [
    CommonModule,
    IntroRoutingModule,
    MaterialModule
  ]
})
export class IntroModule { }
