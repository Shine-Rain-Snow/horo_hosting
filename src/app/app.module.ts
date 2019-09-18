import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavListComponent,
    ProgressbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
