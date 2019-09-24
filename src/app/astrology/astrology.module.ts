import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstrologyRoutingModule } from './astrology-routing.module';
import { AstInnerComponent } from './ast-inner/ast-inner.component';
import { AstrologyComponent } from './astrology.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AstrologyComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AstrologyRoutingModule,
  ],
  exports: []
})
export class AstrologyModule { }
