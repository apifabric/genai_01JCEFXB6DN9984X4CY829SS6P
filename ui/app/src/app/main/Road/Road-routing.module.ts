import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadHomeComponent } from './home/Road-home.component';
import { RoadNewComponent } from './new/Road-new.component';
import { RoadDetailComponent } from './detail/Road-detail.component';

const routes: Routes = [
  {path: '', component: RoadHomeComponent},
  { path: 'new', component: RoadNewComponent },
  { path: ':id', component: RoadDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Road-detail-permissions'
      }
    }
  },{
    path: ':road_id/RoadtripRoadLink', loadChildren: () => import('../RoadtripRoadLink/RoadtripRoadLink.module').then(m => m.RoadtripRoadLinkModule),
    data: {
        oPermission: {
            permissionId: 'RoadtripRoadLink-detail-permissions'
        }
    }
}
];

export const ROAD_MODULE_DECLARATIONS = [
    RoadHomeComponent,
    RoadNewComponent,
    RoadDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadRoutingModule { }