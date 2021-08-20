import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FieldType} from '@ngx-formly/core';
import {addDays, addMonths, addYears, isAfter, isBefore, parseISO} from "date-fns";


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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZorrlyDate extends FieldType implements OnInit {

  disabledDateFn: ((current: Date) => boolean) | any = null;
  minDateFn: any = null;
  maxDateFn: any = null;
  baseFn: any = null;

  ngOnInit(): void {
    if (this.to.range && typeof this.to.range === 'string') {
      const parts = this.to.range.split(':');
      this.minDateFn = parts[0] ? (current: any, base: any) => isBefore(current, dayCalcFnFromString(parts[0])(base)) : () => false;
      this.maxDateFn = parts[1] ? (current: any, base: any) => isAfter(current, dayCalcFnFromString(parts[1])(base)) : () => false;
      this.baseFn = parts[2] ? () => this.form.get(parts[2])?.value : () => new Date();
      this.disabledDateFn = this.setDisableFn();
    }
  }

  setDisableFn(): (current: Date) => boolean {
    return (current: Date) => {
      const base = this.baseFn();
      return !base || this.minDateFn(current, base) || this.maxDateFn(current, base);
    };
  }


}
