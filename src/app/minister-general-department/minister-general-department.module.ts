import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinisterGeneralDepartmentRoutingModule } from './minister-general-department-routing.module';
import { MinisterComponent } from './minister/minister.component';


@NgModule({
  declarations: [
    MinisterComponent
  ],
  imports: [
    CommonModule,
    MinisterGeneralDepartmentRoutingModule
  ]
})
export class MinisterGeneralDepartmentModule { }
