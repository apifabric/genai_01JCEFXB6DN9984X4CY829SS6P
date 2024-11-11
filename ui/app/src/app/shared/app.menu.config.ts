import { MenuRootItem } from 'ontimize-web-ngx';

import { DessertCardComponent } from './Dessert-card/Dessert-card.component';

import { DestinationCardComponent } from './Destination-card/Destination-card.component';

import { RoadCardComponent } from './Road-card/Road-card.component';

import { RoadtripCardComponent } from './Roadtrip-card/Roadtrip-card.component';

import { RoadtripDessertLinkCardComponent } from './RoadtripDessertLink-card/RoadtripDessertLink-card.component';

import { RoadtripRoadLinkCardComponent } from './RoadtripRoadLink-card/RoadtripRoadLink-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Dessert', name: 'DESSERT', icon: 'view_list', route: '/main/Dessert' }
    
        ,{ id: 'Destination', name: 'DESTINATION', icon: 'view_list', route: '/main/Destination' }
    
        ,{ id: 'Road', name: 'ROAD', icon: 'view_list', route: '/main/Road' }
    
        ,{ id: 'Roadtrip', name: 'ROADTRIP', icon: 'view_list', route: '/main/Roadtrip' }
    
        ,{ id: 'RoadtripDessertLink', name: 'ROADTRIPDESSERTLINK', icon: 'view_list', route: '/main/RoadtripDessertLink' }
    
        ,{ id: 'RoadtripRoadLink', name: 'ROADTRIPROADLINK', icon: 'view_list', route: '/main/RoadtripRoadLink' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    DessertCardComponent

    ,DestinationCardComponent

    ,RoadCardComponent

    ,RoadtripCardComponent

    ,RoadtripDessertLinkCardComponent

    ,RoadtripRoadLinkCardComponent

];