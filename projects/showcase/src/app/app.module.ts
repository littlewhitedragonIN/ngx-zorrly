import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule, Validators} from "@angular/forms";
import {FormlyModule} from "@ngx-formly/core";
import {NzButtonModule} from "ng-zorro-antd/button";
import {defaultErrorMessages} from "./form-errors";
import {NgxZorrlyModule} from "../../../ngx-zorrly/src/zorrly/ngx-zorrly.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    NzFormModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
        extras: {lazyRender: true},
        validationMessages: defaultErrorMessages,
        validators: [
          {name: 'email', validation: Validators.email},
        ]
      },
    ),
    NgxZorrlyModule,
    NzButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
