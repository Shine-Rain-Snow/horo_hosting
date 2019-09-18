import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarotComponent } from './tarot.component';

const routes: Routes = [
	{
		path: '',
		component: TarotComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
  	TarotComponent
  ],
})
export class TarotRoutingModule { }
