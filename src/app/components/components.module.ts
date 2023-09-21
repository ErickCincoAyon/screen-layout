import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    MaterialModule,
    SidebarComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
  ],
})
export class ComponentsModule { }
