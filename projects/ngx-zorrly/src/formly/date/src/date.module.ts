import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';

import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {ZorrlyDate} from "./date.type";
import {DatePickerComponent} from "./date-picker";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";

@NgModule({
  declarations: [ZorrlyDate, DatePickerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'date',
          component: ZorrlyDate,
          wrappers: ['form-field'],
        }
      ],
    }),
    NzDatePickerModule,
  ],
})
export class ZorrlyDateModule {
}
