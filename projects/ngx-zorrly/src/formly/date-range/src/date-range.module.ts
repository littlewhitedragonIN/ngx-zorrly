import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import {ReactiveFormsModule} from '@angular/forms';

import {NzInputModule} from 'ng-zorro-antd/input';
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {ZorrlyDateRange} from "./date-range.type";
import {DateRangePickerComponent} from "./date-range-picker";

@NgModule({
  declarations: [ZorrlyDateRange, DateRangePickerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'date-range',
          component: ZorrlyDateRange,
          wrappers: ['form-field'],
        }
      ],
    }),
    NzDatePickerModule,
  ],
})
export class ZorrlyDateRangeModule {
}
