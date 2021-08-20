import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';

import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {ZorrlyType} from "./type.type";

@NgModule({
  declarations: [ZorrlyType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'type',
          component: ZorrlyType,
          wrappers: ['form-field'],
        }
      ],
    }),
  ],
})
export class ZorrlyTypeModule {
}
