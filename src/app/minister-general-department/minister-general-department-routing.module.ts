import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinisterComponent } from './minister/minister.component';

const routes: Routes = [
  { path: '', redirectTo: 'minister', pathMatch: 'full' },
  { path: 'minister', component: MinisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinisterGeneralDepartmentRoutingModule {}
