import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {add, format} from 'date-fns';


@Component({
  selector: 'formly-field-ng-date-picker',
  template: `
    <nz-date-picker style="width: 100%" (ngModelChange)="onChange($event)"
                    [nzShowToday]="!field.templateOptions.hideToday"
                    [nzRenderExtraFooter]="field.templateOptions.specifyDates ? specifyDates : undefined"
                    [nzDisabledDate]="disabledDateFn" [formControl]="control">
    </nz-date-picker>
    <ng-template #specifyDates>
      <div style="display: flex; justify-content: space-between;">
        <a *ngFor="let s of field.templateOptions.specifyDates" (click)="assignDate(s.value)">{{ s.label }}</a>
      </div>
    </ng-template>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    },
  ],
})
// tslint:disable-next-line:directive-class-suffix
export class DatePickerComponent implements OnInit, OnDestroy, ControlValueAccessor {
  onChange: any;
  onTouched: any;
  control = new FormControl();
  @Input()
  disabledDateFn: ((current: Date) => boolean) | any = null;

  @Input()
  field: any;

  constructor() {
  }

  ngOnInit(): void {

  }

  assignDate(s: any): void {
    if (typeof (s) === 'string') {
      this.writeValue(s);
    } else {
      const d = add(new Date(), s);
      this.writeValue(d);
    }
  }

  writeValue(value: any): void {
    this.control.patchValue(!!value && typeof value === 'string' ? new Date(value) : value);
  }

  registerOnChange(fn: any): void {
    this.onChange = (value: any) => {
      fn(value);
    };
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  ngOnDestroy(): void {
  }
}

