import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadtripRoadLinkHomeComponent } from './home/RoadtripRoadLink-home.component';
import { RoadtripRoadLinkNewComponent } from './new/RoadtripRoadLink-new.component';
import { RoadtripRoadLinkDetailComponent } from './detail/RoadtripRoadLink-detail.component';

const routes: Routes = [
  {path: '', component: RoadtripRoadLinkHomeComponent},
  { path: 'new', component: RoadtripRoadLinkNewComponent },
  { path: ':id', component: RoadtripRoadLinkDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RoadtripRoadLink-detail-permissions'
      }
    }
  }
];

export const ROADTRIPROADLINK_MODULE_DECLARATIONS = [
    RoadtripRoadLinkHomeComponent,
    RoadtripRoadLinkNewComponent,
    RoadtripRoadLinkDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadtripRoadLinkRoutingModule { }