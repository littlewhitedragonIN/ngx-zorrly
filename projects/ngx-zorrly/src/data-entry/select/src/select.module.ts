import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';

import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {ZorrlySelect} from "./select.type";
import {NzSelectModule} from "ng-zorro-antd/select";

@NgModule({
  declarations: [ZorrlySelect],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: ZorrlySelect,
          wrappers: ['form-field'],
        }
      ],
    }),
    NzSelectModule,
  ],
})
export class ZorrlySelectModule {
}
