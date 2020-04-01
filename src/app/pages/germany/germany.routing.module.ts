import { NgModule } from '@angular/core';
import { GermanyComponent } from './germany.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',  component: GermanyComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class GermanyRoutingModule { }
