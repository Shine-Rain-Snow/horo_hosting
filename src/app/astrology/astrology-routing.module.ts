import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstrologyComponent } from './astrology.component';
import { AstInnerComponent } from './ast-inner/ast-inner.component';

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
  declarations: [AstrologyComponent],
})
export class AstrologyRoutingModule { }
