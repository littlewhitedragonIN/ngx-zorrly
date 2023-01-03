import {Component} from '@angular/core';
import {FieldWrapper} from '@ngx-formly/core';

@Component({
  selector: 'zorrly-wrapper-nz-plain',
  template: `
    <div [style]="props.style">
      <ng-container #fieldComponent></ng-container>
    </div>
  `
})
export class ZorrlyPlainWrapper extends FieldWrapper {

}
