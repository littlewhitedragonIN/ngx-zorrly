import {NgModule} from '@angular/core';
import {ZorrlyFormFieldModule} from "./form-field";
import {ZorrlyInputModule} from "./input";
import {ZorrlyTypeModule} from "./type";
import {ZorrlySelectModule} from "./select";

@NgModule({
  declarations: [],
  imports: [
    ZorrlyFormFieldModule,
    ZorrlyInputModule,
    ZorrlySelectModule,
    ZorrlyTypeModule,
  ],
  exports: []
})
export class NgxZorrlyModule {
}
