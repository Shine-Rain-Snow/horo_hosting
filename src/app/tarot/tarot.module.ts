import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarotComponent } from './tarot.component';
import { TarotRoutingModule } from './tarot-routing.module';
import { SelectCardsComponent } from './select-cards/select-cards.component';
import { ShowCardsComponent } from './show-cards/show-cards.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { CelticCardsComponent } from './celtic-cards/celtic-cards.component';
import { CelticDetailComponent } from './celtic-detail/celtic-detail.component';

@NgModule({
  declarations: [TarotComponent, SelectCardsComponent, ShowCardsComponent, SingleCardComponent, CelticCardsComponent, CelticDetailComponent],
  imports: [
    CommonModule,
    TarotRoutingModule
  ]
})
export class TarotModule { }
