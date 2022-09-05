import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { FrameWholeModule }          from "ngx-liburg-frame-side";
import { IntegrateAppAppsComponent } from './integrate-app-apps.component';
import { IntegrateAppRoutingModule } from "./integrate-app-routing.module";


@NgModule({
  declarations: [IntegrateAppAppsComponent],
  imports : [
    CommonModule,
    FrameWholeModule,
    IntegrateAppRoutingModule  ],
})
export class IntegrateAllAppsModule {}
