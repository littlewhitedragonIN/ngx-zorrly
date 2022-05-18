import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';

import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {ZorrlyCheckbox} from "./checkbox.type";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";

@NgModule({
  declarations: [ZorrlyCheckbox],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'checkbox',
          component: ZorrlyCheckbox,
          wrappers: ['form-field'],
        }
      ],
    }),
    NzCheckboxModule,
  ],
})
export class ZorrlyCheckboxModule {
}
