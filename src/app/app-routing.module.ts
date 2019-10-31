import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
// Lazy loading routing
const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(mod => mod.MainModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then(mod => mod.IntroModule),
  },
  {
    path: 'tarot',
    loadChildren: () => import('./tarot/tarot.module').then(mod => mod.TarotModule)
  },
  {
    path: 'booksession',
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
    path: 'press-release',
    loadChildren: () => import('./press-release/press-release.module').then(mod => mod.PressReleaseModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(mod => mod.BooksModule)
  },
  {
    path: 'admin', 
    canActivate: [AuthGuardService],
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
    
  },
  
];


@NgModule({
 
  imports: [RouterModule.forRoot(routes, 
    {onSameUrlNavigation: 'reload'},
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
