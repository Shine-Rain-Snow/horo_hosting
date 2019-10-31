import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component';
import { ProgressbarComponent } from './shared/progressbar/progressbar.component';
import { Globals } from './shared/globals';
import { BlackmenuComponent } from './shared/blackmenu/blackmenu.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavListComponent,
    ProgressbarComponent,
    BlackmenuComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    FormsModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports: [],
  providers: [Globals, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
