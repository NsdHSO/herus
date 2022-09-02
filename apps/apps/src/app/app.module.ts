import { NgModule }         from '@angular/core';
import { MatIconModule }    from "@angular/material/icon";
import { BrowserModule }    from '@angular/platform-browser';
import { FrameWholeModule } from 'ngx-liburg-frame-side';
import { IconCoreModule }   from "ngx-liburg-icon";
import { CONFIG_MAIN }      from './@core/routerConfig';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule ( {
  declarations : [ AppComponent ],
  imports : [
    BrowserModule,
    AppRoutingModule,
    FrameWholeModule.forRoot ( CONFIG_MAIN ),
    IconCoreModule,
    MatIconModule,

  ],
  providers    : [],
  bootstrap    : [ AppComponent ],
} )
export class AppModule {}
