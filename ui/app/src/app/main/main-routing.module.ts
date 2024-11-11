import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Dessert', loadChildren: () => import('./Dessert/Dessert.module').then(m => m.DessertModule) },
    
        { path: 'Destination', loadChildren: () => import('./Destination/Destination.module').then(m => m.DestinationModule) },
    
        { path: 'Road', loadChildren: () => import('./Road/Road.module').then(m => m.RoadModule) },
    
        { path: 'Roadtrip', loadChildren: () => import('./Roadtrip/Roadtrip.module').then(m => m.RoadtripModule) },
    
        { path: 'RoadtripDessertLink', loadChildren: () => import('./RoadtripDessertLink/RoadtripDessertLink.module').then(m => m.RoadtripDessertLinkModule) },
    
        { path: 'RoadtripRoadLink', loadChildren: () => import('./RoadtripRoadLink/RoadtripRoadLink.module').then(m => m.RoadtripRoadLinkModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }