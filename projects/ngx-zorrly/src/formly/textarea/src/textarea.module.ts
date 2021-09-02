import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';

import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {ZorrlyTextarea} from "./textarea.type";

@NgModule({
  declarations: [ZorrlyTextarea],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'textarea',
          component: ZorrlyTextarea,
          wrappers: ['form-field'],
        }
      ],
    }),
  ],
})
export class ZorrlyTextAreaModule {
}
