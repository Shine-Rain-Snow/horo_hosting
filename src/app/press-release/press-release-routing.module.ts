import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PressReleaseComponent } from './press-release.component';

const routes: Routes = [
  {
		path: '',
		component: PressReleaseComponent,
		data: { state: 'press-releasing' }
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class PressReleaseRoutingModule { }
