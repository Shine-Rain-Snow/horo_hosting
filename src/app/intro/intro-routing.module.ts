import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro.component';

const routes: Routes = [
	{
		path: '',
		component: IntroComponent,
		data: { state: 'intro' }
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class IntroRoutingModule { }
