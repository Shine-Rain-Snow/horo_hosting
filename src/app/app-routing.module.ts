import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(mod => mod.MainModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then(mod => mod.IntroModule)
  },
  {
    path: 'tarot',
    loadChildren: () => import('./tarot/tarot.module').then(mod => mod.TarotModule)
  },
  {
    path: 'counseling',
    loadChildren: () => import('./counseling/counseling.module').then(mod => mod.CounselingModule)
  },
  {
    path: 'astrology',
    loadChildren: () => import('./astrology/astrology.module').then(mod => mod.AstrologyModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }