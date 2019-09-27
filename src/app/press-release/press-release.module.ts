import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressReleaseComponent } from './press-release.component';
import { PressReleaseRoutingModule } from './press-release-routing.module';


@NgModule({
  declarations: [PressReleaseComponent],
  imports: [
    CommonModule,
    PressReleaseRoutingModule
  ]
})
export class PressReleaseModule { }
