import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DannyGrowthComponent } from './DannyGrowth.component';
import { GrowthRecordListComponent } from './growth-record-list/growth-record-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DannyGrowthComponent,
    GrowthRecordListComponent
  ]
})
export class DannyGrowthModule { }
