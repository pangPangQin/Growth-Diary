import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DannyGrowthComponent } from './DannyGrowth/DannyGrowth.component';

const routes: Routes = [
  { path: '',  redirectTo: 'dannyGrowth', pathMatch: 'full' },
  { path: 'dannyGrowth', component: DannyGrowthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
