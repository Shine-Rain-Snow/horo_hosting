import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { StepFiveComponent } from './step-five/step-five.component';
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
	},
	{
		path: 'step-three',
		component: StepThreeComponent
	},
	{
		path: 'step-four',
		component: StepFourComponent
	},
	{
		path: 'step-five',
		component: StepFiveComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [AboutComponent],
})
export class AboutRoutingModule { }
