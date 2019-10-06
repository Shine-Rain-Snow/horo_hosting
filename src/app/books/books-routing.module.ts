import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BooksDreamComponent } from './books-dream/books-dream.component';

const routes: Routes = [
   {
		path: '',
		component: BooksComponent,
		data: { state: 'books' }
	},
	{
		path: 'books-dream',
		component:BooksDreamComponent,
		data: { state: 'books-dream' }
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
