import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import {
  RouterModule,
  Routes
} from "@angular/router";
import { IntegrateAppAppsComponent } from "./integrate-app-apps.component";

const routes: Routes = [
  {
    path: '',
    component: IntegrateAppAppsComponent,
    children  : [
      {
        path         : 'driver',
        loadChildren : () => import('driver/Module').then ( m => m.DriverModule ),
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class IntegrateAppRoutingModule { }
