import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Road-card.component.html',
  styleUrls: ['./Road-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Road-card]': 'true'
  }
})

export class RoadCardComponent {


}