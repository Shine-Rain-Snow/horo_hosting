import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';

const routes: Routes = [
	{
		path: '',
		component: AboutComponent,
	},
	{
		path: 'step-one',
		component: StepOneComponent
	},
	{
		path: 'step-two',
		component: StepTwoComponent	
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [AboutComponent],
})
export class AboutRoutingModule { }
