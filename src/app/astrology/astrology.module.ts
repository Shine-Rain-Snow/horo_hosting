import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstrologyRoutingModule } from './astrology-routing.module';
import { AstInnerComponent } from './ast-inner/ast-inner.component';


@NgModule({
  declarations: [AstInnerComponent],
  imports: [
    CommonModule,
    AstrologyRoutingModule
  ]
})
export class AstrologyModule { }
