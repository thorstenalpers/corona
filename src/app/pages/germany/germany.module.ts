import { NgModule } from '@angular/core';
import { GermanyComponent } from './germany.component';
import { GermanyRoutingModule } from './germany.routing.module';
import { CoronaApiService as CoronaVirusApiService} from 'src/app/core/services/coronaApiService';
import {TableModule} from 'primeng/table';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    GermanyRoutingModule,
    TableModule,
    CommonModule,
    NgxChartsModule
  ],
  declarations: [
    GermanyComponent
  ],
  providers: [CoronaVirusApiService]
})
export class GermanyModule { }
