import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'zorrly-checkbox',
  template: `
    <label nz-checkbox [formControl]="$any(formControl)">{{to.placeholder}}</label>
  `,
})
export class ZorrlyCheckbox extends FieldType {
}
