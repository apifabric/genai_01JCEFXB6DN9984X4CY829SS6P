import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Roadtrip-new',
  templateUrl: './Roadtrip-new.component.html',
  styleUrls: ['./Roadtrip-new.component.scss']
})
export class RoadtripNewComponent {
  @ViewChild("RoadtripForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}