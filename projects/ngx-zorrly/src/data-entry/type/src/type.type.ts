import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'zorrly-type',
  template: `
    zorrly-type
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZorrlyType extends FieldType {}
