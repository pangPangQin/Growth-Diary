import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { DannyGrowthModule } from './DannyGrowth/DannyGrowth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataViewModule,
    DropdownModule,
    DannyGrowthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
