import { NgModule } from '@angular/core';
import { CoronaComponent } from './corona.component';
import { CoronaRoutingModule } from './corona.routing.module';

@NgModule({
  imports: [
    CoronaRoutingModule
  ],
  declarations: [
    CoronaComponent
  ]
})
export class CoronaModule { }
