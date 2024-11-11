import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DESSERT_MODULE_DECLARATIONS, DessertRoutingModule} from  './Dessert-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DessertRoutingModule
  ],
  declarations: DESSERT_MODULE_DECLARATIONS,
  exports: DESSERT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DessertModule { }