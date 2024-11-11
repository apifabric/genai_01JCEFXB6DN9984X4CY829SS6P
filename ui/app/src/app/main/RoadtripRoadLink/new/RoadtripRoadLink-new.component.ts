import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'RoadtripRoadLink-new',
  templateUrl: './RoadtripRoadLink-new.component.html',
  styleUrls: ['./RoadtripRoadLink-new.component.scss']
})
export class RoadtripRoadLinkNewComponent {
  @ViewChild("RoadtripRoadLinkForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}