import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EconomiesService } from './services/economies.service';
import { CoronaApiService} from './services/coronaApiService';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    EconomiesService,
    CoronaApiService
],
  declarations: []
})
export class CoreModule { }
