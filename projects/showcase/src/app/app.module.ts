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
import {NzDividerModule} from "ng-zorro-antd/divider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {NgxZorrlyFormModule} from "../../../ngx-zorrly/src/formly/ngx-zorrly-form.module";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";
import {pluck} from "rxjs/operators";

registerLocaleData(en);

export const optionsFactory = async (app: AppService) => {
  return app.options().pipe(pluck('gender')).toPromise();
};

export const optionsStreamFactory = (app: AppService) => {
  return app.options();
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NzLayoutModule,
    NzFormModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
        validationMessages: defaultErrorMessages,
        validators: [
          {name: 'email', validation: Validators.email},
        ]
      },
    ),
    NgxZorrlyFormModule,
    NzButtonModule,
    NzDividerModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US},
    {provide: 'sample-options', useFactory: optionsFactory, deps: [AppService]},
    {provide: 'options-stream', useFactory: optionsStreamFactory, deps: [AppService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
