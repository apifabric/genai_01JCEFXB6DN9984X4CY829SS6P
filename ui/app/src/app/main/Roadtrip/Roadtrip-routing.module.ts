import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadtripHomeComponent } from './home/Roadtrip-home.component';
import { RoadtripNewComponent } from './new/Roadtrip-new.component';
import { RoadtripDetailComponent } from './detail/Roadtrip-detail.component';

const routes: Routes = [
  {path: '', component: RoadtripHomeComponent},
  { path: 'new', component: RoadtripNewComponent },
  { path: ':id', component: RoadtripDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Roadtrip-detail-permissions'
      }
    }
  },{
    path: ':roadtrip_id/RoadtripDessertLink', loadChildren: () => import('../RoadtripDessertLink/RoadtripDessertLink.module').then(m => m.RoadtripDessertLinkModule),
    data: {
        oPermission: {
            permissionId: 'RoadtripDessertLink-detail-permissions'
        }
    }
},{
    path: ':roadtrip_id/RoadtripRoadLink', loadChildren: () => import('../RoadtripRoadLink/RoadtripRoadLink.module').then(m => m.RoadtripRoadLinkModule),
    data: {
        oPermission: {
            permissionId: 'RoadtripRoadLink-detail-permissions'
        }
    }
}
];

export const ROADTRIP_MODULE_DECLARATIONS = [
    RoadtripHomeComponent,
    RoadtripNewComponent,
    RoadtripDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadtripRoutingModule { }