import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { StepOneComponent } from './step-one/step-one.component';

const routes: Routes = [
	{
		path: '',
		component: AboutComponent,
	},
	{
		path: 'step-one',
		component: StepOneComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [AboutComponent],
})
export class AboutRoutingModule { }
