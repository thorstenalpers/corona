import { NgModule } from '@angular/core';
import { WorldComponent } from './world.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',  component: WorldComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class WorldRoutingModule { }
