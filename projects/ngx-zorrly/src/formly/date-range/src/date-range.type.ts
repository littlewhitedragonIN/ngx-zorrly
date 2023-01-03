import {Component, OnDestroy, OnInit} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';


@Component({
  selector: 'zorrly-date-range',
  template: `
    <formly-field-ng-date-range-picker [field]="field" [formControl]="formControl"></formly-field-ng-date-range-picker>
  `,
})
export class ZorrlyDateRange extends FieldType<FieldTypeConfig> implements OnInit, OnDestroy {


  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
