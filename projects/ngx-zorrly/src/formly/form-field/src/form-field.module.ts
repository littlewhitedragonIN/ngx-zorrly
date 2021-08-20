import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ZorrlyFormFieldWrapper} from "./form-field.wrapper";

@NgModule({
  declarations: [ZorrlyFormFieldWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field',
          component: ZorrlyFormFieldWrapper,
        },
      ],
    }),
  ],
  exports: []
})
export class ZorrlyFormFieldModule {
}
