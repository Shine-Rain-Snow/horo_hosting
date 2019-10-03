import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component';
import { ProgressbarComponent } from './shared/progressbar/progressbar.component';
import { Globals } from './shared/globals';
import { MatVideoModule } from 'mat-video';
import { BlackmenuComponent } from './shared/blackmenu/blackmenu.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavListComponent,
    ProgressbarComponent,
    BlackmenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    FormsModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    MatVideoModule,
  ],
  exports: [],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
