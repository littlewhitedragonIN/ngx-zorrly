import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'zorrly-input',
  template: `
    <input *ngIf="to.type !== 'number'; else numberTmp"
           nz-input
           [formControl]="$any(formControl)"
           [type]="to.type || 'text'"
           [formlyAttributes]="field"/>
    <ng-template #numberTmp>
      <nz-input-number style="width: 100%" [formControl]="$any(formControl)" [formlyAttributes]="field"></nz-input-number>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZorrlyInput extends FieldType {
}
