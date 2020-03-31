import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EconomiesComponent } from './Economies.component';

const routes: Routes = [
  {path: '',  component: EconomiesComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class EconomiesRoutingModule { }
