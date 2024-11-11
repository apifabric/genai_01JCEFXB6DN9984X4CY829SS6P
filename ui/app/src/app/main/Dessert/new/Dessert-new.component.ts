import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Dessert-new',
  templateUrl: './Dessert-new.component.html',
  styleUrls: ['./Dessert-new.component.scss']
})
export class DessertNewComponent {
  @ViewChild("DessertForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}