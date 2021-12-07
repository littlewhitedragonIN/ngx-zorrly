import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'zorrly-description',
  template: `
    <div [innerHTML]="to.html"></div>
  `,
})
export class ZorrlyDescription extends FieldType {
  constructor() {
    super();
  }
}
