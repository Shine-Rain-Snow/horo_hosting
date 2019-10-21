import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarotComponent } from './tarot.component';
import { SelectCardsComponent } from './select-cards/select-cards.component';
import { ShowCardsComponent } from './show-cards/show-cards.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { CelticCardsComponent } from './celtic-cards/celtic-cards.component';
import { CelticDetailComponent } from './celtic-detail/celtic-detail.component';
import { LenormandSelectComponent } from './lenormand-select/lenormand-select.component';
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
		path: 'lenormand-select',
		component: LenormandSelectComponent,
		data: { state: 'lenormand-select' }
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
	},
	{
		path: 'celtic-cards',
		component: CelticCardsComponent,
		data: { state: 'celtic-cards' }
	},
	{
		path: 'celtic-detail',
		component: CelticDetailComponent,
		data: { state: 'celtic-detail' }
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
  	
  ],
})
export class TarotRoutingModule { }
