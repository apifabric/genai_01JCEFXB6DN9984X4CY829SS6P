import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './RoadtripRoadLink-card.component.html',
  styleUrls: ['./RoadtripRoadLink-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.RoadtripRoadLink-card]': 'true'
  }
})

export class RoadtripRoadLinkCardComponent {


}