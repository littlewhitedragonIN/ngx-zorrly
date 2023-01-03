import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';
import {Subscription} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'zorrly-select',
  template: `
    <nz-select nzShowSearch nzAllowClear [formControl]="formControl" [nzMode]="props.mode ? props.mode : 'default'">
      <nz-option *ngFor="let o of $any(this.props.options)" [nzValue]="o.value" [nzLabel]="o.label"></nz-option>
    </nz-select>
  `,
})
export class ZorrlySelect extends FieldType<FieldTypeConfig> implements OnInit, OnDestroy {

  optionSub = new Subscription();

  constructor(private injector: Injector) {
    super();
  }

  ngOnInit() {
    if (!!this.props.options$) {
      const parts = this.props.options$.split(':');
      let option$ = this.injector.get(parts[0]);
      if (parts.length > 1) {
        option$ = option$.pipe(map((o: any) => o[parts[1]]))
      }
      this.optionSub.add(option$.subscribe((val: any) => this.props.options = val))
    }
  }

  ngOnDestroy(): void {
    this.optionSub.unsubscribe();
  }
}
