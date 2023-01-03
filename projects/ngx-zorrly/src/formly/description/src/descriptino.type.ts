import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';

@Component({
  selector: 'zorrly-description',
  template: `
    <div [innerHTML]="props.html"></div>
  `,
})
export class ZorrlyDescription extends FieldType<FieldTypeConfig> {
}
