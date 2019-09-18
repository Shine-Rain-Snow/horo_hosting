import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounselingComponent } from './counseling.component'

const routes: Routes = [
	{
		path: '',
		component: CounselingComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [CounselingComponent],
})
export class CounselingRoutingModule { }
