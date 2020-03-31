import { NgModule } from '@angular/core';
import { EconomiesComponent } from './Economies.component';
import { EconomiesRoutingModule } from './Economies.routing.module';
import { EconomyEntryComponent } from './economy/economy.component';
import { CommonModule } from '@angular/common';
import { EconomiesService } from 'src/app/core/services/economies.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    EconomiesRoutingModule, CommonModule, FormsModule
  ],
  exports: [
    EconomyEntryComponent
  ],
  declarations: [
    EconomiesComponent,
    EconomyEntryComponent
  ],
  providers: [EconomiesService]
})
export class EconomiesModule { }
