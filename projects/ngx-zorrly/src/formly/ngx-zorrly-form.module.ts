import {NgModule} from '@angular/core';
import {ZorrlyFormFieldModule} from "./form-field";
import {ZorrlyInputModule} from "./input";
import {ZorrlyTypeModule} from "./type";
import {ZorrlySelectModule} from "./select";
import {ZorrlyDateModule} from "./date";
import {ZorrlyTextAreaModule} from "./textarea";
import {ZorrlyDateRangeModule} from "./date-range/src/date-range.module";

@NgModule({
  declarations: [],
  imports: [
    ZorrlyFormFieldModule,
    ZorrlyInputModule,
    ZorrlySelectModule,
    ZorrlyDateModule,
    ZorrlyDateRangeModule,
    ZorrlyTextAreaModule,
    ZorrlyTypeModule,
  ],
  exports: []
})
export class NgxZorrlyFormModule {
}
