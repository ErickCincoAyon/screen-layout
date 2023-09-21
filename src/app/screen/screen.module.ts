import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeroOneComponent } from './zero-one/zero-one.component';
import { ScreenComponent } from './screen.component';
import { ScreenRoutingModule } from './screen-routing.module';
import { ComponentsModule } from '../components/components.module';
import { ZeroTwoComponent } from './zero-two/zero-two.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ZeroOneComponent,
    ScreenComponent,
    ZeroTwoComponent
  ],
  imports: [
    CommonModule,
    ScreenRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ]
})
export class ScreenModule { }
