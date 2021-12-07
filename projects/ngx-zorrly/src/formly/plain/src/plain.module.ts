import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyModule} from '@ngx-formly/core';
import {ZorrlyPlainWrapper} from "./plain.wrapper";

@NgModule({
  declarations: [ZorrlyPlainWrapper],
  imports: [
    CommonModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'plain',
          component: ZorrlyPlainWrapper,
        },
      ],
    }),
  ],
  exports: []
})
export class ZorrlyPlainModule {
}
