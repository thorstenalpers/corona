import { NgModule } from '@angular/core';
import { CoronaComponent } from './corona.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',  component: CoronaComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CoronaRoutingModule { }
