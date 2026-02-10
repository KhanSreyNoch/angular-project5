import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('../app/layout-page/layout-page.module').then(
  //       (m) => m.LayoutPageModule,
  //     ),
  //   children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'full' },
  //     { path: 'home', component: HomePageComponent },
  //   ],
  // },
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: '', component: HomePageComponent },
      {
        path: 'minister-general-department',
        loadChildren: () =>
          import('./minister-general-department/minister-general-department.module').then(
            (m) => m.MinisterGeneralDepartmentModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
