import { NgModule } from '@angular/core';
import { WorldComponent } from './world.component';
import { WorldRoutingModule } from './world.routing.module';
import { CoronaApiService as CoronaVirusApiService} from 'src/app/core/services/coronaApiService';
import {TableModule} from 'primeng/table';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    WorldRoutingModule,
    TableModule,
    CommonModule
  ],
  declarations: [
    WorldComponent
  ],
  providers: [CoronaVirusApiService]
})
export class WorldModule { }
