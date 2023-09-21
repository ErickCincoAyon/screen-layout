import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenRoutingModule } from './screen/screen-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./screen/screen.module').then(m => m.ScreenModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ScreenRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
