import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import {ZorrlyDescription} from "./descriptino.type";

@NgModule({
  declarations: [ZorrlyDescription],
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'description',
          component: ZorrlyDescription,
          wrappers: ['plain'],
        }
      ],
    }),
  ],
})
export class ZorrlyDescriptionModule {
}
