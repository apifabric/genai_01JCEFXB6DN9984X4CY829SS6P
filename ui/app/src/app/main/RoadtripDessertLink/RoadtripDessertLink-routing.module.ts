import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadtripDessertLinkHomeComponent } from './home/RoadtripDessertLink-home.component';
import { RoadtripDessertLinkNewComponent } from './new/RoadtripDessertLink-new.component';
import { RoadtripDessertLinkDetailComponent } from './detail/RoadtripDessertLink-detail.component';

const routes: Routes = [
  {path: '', component: RoadtripDessertLinkHomeComponent},
  { path: 'new', component: RoadtripDessertLinkNewComponent },
  { path: ':id', component: RoadtripDessertLinkDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RoadtripDessertLink-detail-permissions'
      }
    }
  }
];

export const ROADTRIPDESSERTLINK_MODULE_DECLARATIONS = [
    RoadtripDessertLinkHomeComponent,
    RoadtripDessertLinkNewComponent,
    RoadtripDessertLinkDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadtripDessertLinkRoutingModule { }