import {NgModule} from '@angular/core';
import {ZorrlyFormFieldModule} from "./form-field";
import {ZorrlyInputModule} from "./input";
import {ZorrlyTypeModule} from "./type";
import {ZorrlySelectModule} from "./select";
import {ZorrlyDateModule} from "./date";

@NgModule({
  declarations: [],
  imports: [
    ZorrlyFormFieldModule,
    ZorrlyInputModule,
    ZorrlySelectModule,
    ZorrlyDateModule,
    ZorrlyTypeModule,

  ],
  exports: []
})
export class NgxZorrlyFormModule {
}
