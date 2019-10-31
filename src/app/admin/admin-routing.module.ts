import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SessionPortalComponent } from './session-portal/session-portal.component';
import { SignArticlesComponent } from './sign-articles/sign-articles.component';

const routes: Routes = [
  {
    path: '',
		component: AdminComponent,
		data: { state: 'admin' }
  },
  // {
  //   path: 'userSession',
	// 	component: SessionPortalComponent,
	// 	data: { state: 'userSession' }
  // },
  // {
  //   path: 'articleManager',
	// 	component: SignArticlesComponent,
	// 	data: { state: 'articleManager' }
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
