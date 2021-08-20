import {Component, Injector, OnInit} from '@angular/core';
import {FieldType} from '@ngx-formly/core';
import {of} from "rxjs";

@Component({
  selector: 'zorrly-select',
  template: `
    <ng-container *ngIf="($any(to.options) | async) as opts">
      <nz-select nzShowSearch nzAllowClear [formControl]="$any(formControl)" [nzMode]="to.mode ? to.mode : 'default'">
        <nz-option *ngFor="let o of opts" [nzValue]="o.value" [nzLabel]="o.label"></nz-option>
      </nz-select>
    </ng-container>
  `,
})
export class ZorrlySelect extends FieldType implements OnInit {

  constructor(private injector: Injector) {
    super();
  }

  ngOnInit() {
    if (!!this.to.options_inject_token) {
      this.injector.get(this.to.options_inject_token).subscribe((val: any) => {
        this.to.options = of(val);
      });
    } else {
      this.to.options = (of(this.to.options) as any);
    }
  }
}
