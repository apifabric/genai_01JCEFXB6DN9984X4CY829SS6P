import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Dessert-card.component.html',
  styleUrls: ['./Dessert-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Dessert-card]': 'true'
  }
})

export class DessertCardComponent {


}