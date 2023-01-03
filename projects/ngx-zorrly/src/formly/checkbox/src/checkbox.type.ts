import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';

@Component({
  selector: 'zorrly-checkbox',
  template: `
    <div [style]="props.style">
      <label nz-checkbox [formControl]="formControl">{{props.placeholder}}</label>
    </div>
  `,
})
export class ZorrlyCheckbox extends FieldType<FieldTypeConfig> {
}
