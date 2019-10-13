import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarotComponent } from './tarot.component';
import { SelectCardsComponent } from './select-cards/select-cards.component';
import { ShowCardsComponent } from './show-cards/show-cards.component';
import { SingleCardComponent } from './single-card/single-card.component';

const routes: Routes = [
	{
		path: '',
		component: TarotComponent,
		data: { state: 'tarot' }
	},
	{
		path: 'select-cards',
		component: SelectCardsComponent,
		data: { state: 'select-cards' }
	},
	{
		path: 'show-cards',
		component: ShowCardsComponent,
		data: { state: 'show-cards' }
	},
	{
		path: 'single-card',
		component: SingleCardComponent,
		data: { state: 'single-card' }
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
  	
  ],
})
export class TarotRoutingModule { }
