import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule, MatSidenavModule, MatToolbarModule, 
         MatIconModule, MatButtonModule, MatListModule, 
         MatMenuModule, MatProgressBarModule } from '@angular/material';
import { MatVideoModule } from 'mat-video';

@NgModule({
  imports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatVideoModule,

  ],
  exports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatVideoModule,
  ],
  declarations: []
})
export class MaterialModule { }