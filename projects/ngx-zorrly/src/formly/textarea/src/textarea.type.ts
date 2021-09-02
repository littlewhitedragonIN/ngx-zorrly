import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'zorrly-textarea',
  template: `
    <textarea [rows]="to.rows" nz-input [formControl]="$any(formControl)" [nzAutosize]="to.autoSize"></textarea>
  `,
})
export class ZorrlyTextarea extends FieldType {
}
