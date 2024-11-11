import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'RoadtripDessertLink-new',
  templateUrl: './RoadtripDessertLink-new.component.html',
  styleUrls: ['./RoadtripDessertLink-new.component.scss']
})
export class RoadtripDessertLinkNewComponent {
  @ViewChild("RoadtripDessertLinkForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}