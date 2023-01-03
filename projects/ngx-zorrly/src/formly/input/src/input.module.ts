import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';

import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {ZorrlyInput} from "./input.type";

@NgModule({
  declarations: [ZorrlyInput],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: ZorrlyInput,
          wrappers: ['form-field'],
        },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number',
            },
          },
        }
      ],
    }),
  ],
})
export class ZorrlyInputModule {
}
