import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarotComponent } from './tarot.component';
import { SelectCardsComponent } from './select-cards/select-cards.component';
import { ShowCardsComponent } from './show-cards/show-cards.component';

const routes: Routes = [
	{
		path: '',
		component: TarotComponent,
		data: { state: 'tarot' }
	},
	{
		path: 'select-cards',
		component: SelectCardsComponent,
	},
	{
		path: 'show-cards',
		component: ShowCardsComponent,
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
  	
  ],
})
export class TarotRoutingModule { }
