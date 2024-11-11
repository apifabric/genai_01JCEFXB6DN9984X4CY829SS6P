import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ROADTRIPROADLINK_MODULE_DECLARATIONS, RoadtripRoadLinkRoutingModule} from  './RoadtripRoadLink-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RoadtripRoadLinkRoutingModule
  ],
  declarations: ROADTRIPROADLINK_MODULE_DECLARATIONS,
  exports: ROADTRIPROADLINK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RoadtripRoadLinkModule { }