import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertHomeComponent } from './home/Dessert-home.component';
import { DessertNewComponent } from './new/Dessert-new.component';
import { DessertDetailComponent } from './detail/Dessert-detail.component';

const routes: Routes = [
  {path: '', component: DessertHomeComponent},
  { path: 'new', component: DessertNewComponent },
  { path: ':id', component: DessertDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Dessert-detail-permissions'
      }
    }
  },{
    path: ':dessert_id/RoadtripDessertLink', loadChildren: () => import('../RoadtripDessertLink/RoadtripDessertLink.module').then(m => m.RoadtripDessertLinkModule),
    data: {
        oPermission: {
            permissionId: 'RoadtripDessertLink-detail-permissions'
        }
    }
}
];

export const DESSERT_MODULE_DECLARATIONS = [
    DessertHomeComponent,
    DessertNewComponent,
    DessertDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DessertRoutingModule { }