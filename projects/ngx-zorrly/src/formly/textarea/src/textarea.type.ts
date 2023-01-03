import {Component} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';

@Component({
  selector: 'zorrly-textarea',
  template: `
    <textarea [rows]="props.rows" nz-input [formControl]="formControl" [nzAutosize]="props.autoSize ?? false"></textarea>
  `,
})
export class ZorrlyTextarea extends FieldType<FieldTypeConfig> {
}
