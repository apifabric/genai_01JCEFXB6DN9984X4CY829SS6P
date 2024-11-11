import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Roadtrip-card.component.html',
  styleUrls: ['./Roadtrip-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Roadtrip-card]': 'true'
  }
})

export class RoadtripCardComponent {


}