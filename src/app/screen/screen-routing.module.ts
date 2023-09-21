import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZeroOneComponent } from './zero-one/zero-one.component';
import { ScreenComponent } from './screen.component';
import { ZeroTwoComponent } from './zero-two/zero-two.component';

const routes: Routes = [
  {
    path: '',
    component: ScreenComponent,
    children: [

      { 
        path: 'zero-one', 
        component: ZeroOneComponent 
      },

      { 
        path: 'zero-two', 
        component: ZeroTwoComponent 
      },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenRoutingModule { }
