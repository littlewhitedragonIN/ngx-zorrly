import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';

import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {ZorrlyUpload} from "./upload.type";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  declarations: [ZorrlyUpload],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'upload',
          component: ZorrlyUpload,
          wrappers: ['form-field'],
        }
      ],
    }),
    NzUploadModule,
    NzButtonModule,
    NzIconModule,
  ],
})
export class ZorrlyUploadModule {
}
