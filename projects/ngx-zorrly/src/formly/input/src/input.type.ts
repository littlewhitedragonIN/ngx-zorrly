import { Component} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';

@Component({
  selector: 'zorrly-input',
  template: `
    <input *ngIf="props.type !== 'number'; else numberTmp"
           nz-input
           [formControl]="formControl"
           [type]="props.type || 'text'"
           [formlyAttributes]="field"/>
    <ng-template #numberTmp>
      <nz-input-number style="width: 100%" [formControl]="formControl" [formlyAttributes]="field"></nz-input-number>
    </ng-template>
  `,
})
export class ZorrlyInput extends FieldType<FieldTypeConfig> {
}
