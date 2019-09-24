import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AstrologyComponent } from './astrology.component';
import { AstInnerComponent } from './ast-inner/ast-inner.component';
import { MaterialModule } from '../material/material.module';
const routes: Routes = [
	{
		path: '',
		component: AstrologyComponent,
	},
	{
		path: 'ast-inner',
		component: AstInnerComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [AstInnerComponent],
})
export class AstrologyRoutingModule { }
