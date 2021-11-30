import {Component, OnDestroy, OnInit} from '@angular/core';
import {FieldType} from '@ngx-formly/core';


@Component({
  selector: 'zorrly-date-range',
  template: `
    <formly-field-ng-date-range-picker [field]="field" [formControl]="$any(formControl)"></formly-field-ng-date-range-picker>
  `,
})
export class ZorrlyDateRange extends FieldType implements OnInit, OnDestroy {


  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
