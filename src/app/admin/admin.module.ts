import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SessionPortalComponent } from './session-portal/session-portal.component';
import { SignArticlesComponent } from './sign-articles/sign-articles.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AdminSettingComponent } from './admin-setting/admin-setting.component';

@NgModule({
  declarations: [AdminComponent, SessionPortalComponent, SignArticlesComponent, AdminSettingComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AdminRoutingModule,
    HttpClientModule, 
    AngularEditorModule
  ]
})
export class AdminModule { }
