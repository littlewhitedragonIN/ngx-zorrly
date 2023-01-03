import {Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {startOfDay} from 'date-fns';


@Component({
  selector: 'formly-field-ng-date-range-picker',
  template: `
    <nz-range-picker [nzShowTime]="showTime" [formControl]="control" (ngModelChange)="onChange($event)"></nz-range-picker>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true
    },
  ],
})
export class DateRangePickerComponent implements OnInit, OnDestroy, ControlValueAccessor {
  onChange: any;
  onTouched: any;
  control = new FormControl();
  @Input()
  disabledDateFn: ((current: Date) => boolean) | any = null;

  @Input()
  field: any;

  showTime: any = false;

  constructor() {
  }

  ngOnInit(): void {
    if (!!this.field.props.showTime) {
      this.showTime = {...this.field.props.showTime, nzDefaultOpenValue: startOfDay(new Date())}
    }
  }

  writeValue(value: any): void {
    this.control.patchValue([value?.begin, value?.end]);
  }

  registerOnChange(fn: any): void {
    this.onChange = (value: any) => {
      fn({begin: value[0], end: value[1]});
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

