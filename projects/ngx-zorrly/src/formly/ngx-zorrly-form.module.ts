import {NgModule} from '@angular/core';
import {ZorrlyFormFieldModule} from "./form-field";
import {ZorrlyInputModule} from "./input";
import {ZorrlyTypeModule} from "./type";
import {ZorrlySelectModule} from "./select";
import {ZorrlyDateModule} from "./date";
import {ZorrlyDateRangeModule} from "./date-range";
import {ZorrlyDescriptionModule} from "./description";
import {ZorrlyTextAreaModule} from "./textarea";
import {ZorrlyPlainModule} from "./plain";
import {ZorrlyUploadModule} from "./upload";
import {ZorrlyCheckboxModule} from "./checkbox";


@NgModule({
  declarations: [],
  imports: [
    ZorrlyFormFieldModule,
    ZorrlyPlainModule,
    ZorrlyInputModule,
    ZorrlySelectModule,
    ZorrlyDateModule,
    ZorrlyDateRangeModule,
    ZorrlyTextAreaModule,
    ZorrlyTypeModule,
    ZorrlyDescriptionModule,
    ZorrlyUploadModule,
    ZorrlyCheckboxModule,
  ],
  exports: []
})
export class NgxZorrlyFormModule {
}
