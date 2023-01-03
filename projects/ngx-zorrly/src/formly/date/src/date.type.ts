import {Component, OnDestroy, OnInit} from '@angular/core';
import {FieldType} from '@ngx-formly/core';
import {addDays, addMonths, addYears, isAfter, isBefore, parseISO, startOfDay} from "date-fns";
import {Subscription} from "rxjs";


const dayCalcRegEx = /([+-]\d*)([dmy])/;

const dayFnPrefix: any = {
  d: addDays,
  m: addMonths,
  y: addYears,
};

const dayCalcFnFromString = (str: string): ((base: Date | string) => Date) => {
  const g: any = str.match(dayCalcRegEx);
  const i = parseInt(g[1], 10);
  return (base) => {
    const comparingDate = typeof base === 'string' ? parseISO(base) : base;
    return dayFnPrefix[g[2]](comparingDate, i);
  };
};

@Component({
  selector: 'zorrly-date',
  template: `
    <formly-field-ng-date-picker style="width: 100%;" [field]="field" [disabledDateFn]="disabledDateFn"
                                 [formControl]="$any(formControl)"></formly-field-ng-date-picker>
  `,
})
export class ZorrlyDate extends FieldType implements OnInit, OnDestroy {

  disabledDateFn: ((current: Date) => boolean) | any = null;
  minDateFn: any = null;
  maxDateFn: any = null;
  baseDate = new Date();
  dateSub = new Subscription();

  ngOnInit(): void {
    if (this.props.range && typeof this.props.range === 'string') {
      const parts = this.props.range.split(':');
      this.minDateFn = parts[0] ? (current: any, base: any) => isBefore(current, dayCalcFnFromString(parts[0])(base)) : () => false;
      this.maxDateFn = parts[1] ? (current: any, base: any) => isAfter(current, dayCalcFnFromString(parts[1])(base)) : () => false;
      this.disabledDateFn = this.setDisableFn();

      if (!!parts[2]) {
        const sup = this.form.get(parts[2])?.valueChanges.subscribe((val) => {
          this.baseDate = val;
          if (this.formControl.value && this.disabledDateFn(this.formControl.value)) {
            this.formControl.patchValue(null);
          }
        });
        this.dateSub.add(sup);
      }
    }
  }

  setDisableFn(): (current: Date) => boolean {
    return (current: Date) => {
      const base = startOfDay(this.baseDate);
      const target = startOfDay(current);
      return !base || this.minDateFn(target, base) || this.maxDateFn(target, base);
    };
  }

  ngOnDestroy(): void {
    this.dateSub.unsubscribe();
  }

}
