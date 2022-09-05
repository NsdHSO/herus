import { CommonModule }              from '@angular/common';
import { NgModule }                  from '@angular/core';
import {
  RouterModule,
  Routes
}                                    from '@angular/router';

const routes : Routes = [
  {
    path      : '',
    loadChildren : () => import('./integrate-all-apps/integrate-all-apps.module').then ( m => m.IntegrateAllAppsModule ),
  },

]

@NgModule ( {
  declarations : [],
  imports      : [
    CommonModule,
    RouterModule.forRoot ( routes )
  ],
  exports      : [
    RouterModule
  ]
} )
export class AppRoutingModule {}
