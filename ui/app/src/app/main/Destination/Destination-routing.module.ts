import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationHomeComponent } from './home/Destination-home.component';
import { DestinationNewComponent } from './new/Destination-new.component';
import { DestinationDetailComponent } from './detail/Destination-detail.component';

const routes: Routes = [
  {path: '', component: DestinationHomeComponent},
  { path: 'new', component: DestinationNewComponent },
  { path: ':id', component: DestinationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Destination-detail-permissions'
      }
    }
  },{
    path: ':destination_id/Road', loadChildren: () => import('../Road/Road.module').then(m => m.RoadModule),
    data: {
        oPermission: {
            permissionId: 'Road-detail-permissions'
        }
    }
}
];

export const DESTINATION_MODULE_DECLARATIONS = [
    DestinationHomeComponent,
    DestinationNewComponent,
    DestinationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }