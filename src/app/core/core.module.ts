import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EconomiesService } from './services/economies.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    EconomiesService
  ],
  declarations: []
})
export class CoreModule { }
