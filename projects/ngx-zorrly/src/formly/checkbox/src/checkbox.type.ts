import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'zorrly-checkbox',
  template: `
    <div [style]="to.style">
      <label nz-checkbox [formControl]="$any(formControl)">{{to.placeholder}}</label>
    </div>
  `,
})
export class ZorrlyCheckbox extends FieldType {
}
