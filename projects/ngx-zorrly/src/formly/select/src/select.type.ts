import {ChangeDetectionStrategy, Component, Injector, OnInit} from '@angular/core';
import {FieldType} from '@ngx-formly/core';
import {of} from "rxjs";

@Component({
  selector: 'zorrly-select',
  template: `
    <nz-select nzShowSearch nzAllowClear [formControl]="$any(formControl)" [nzMode]="to.mode ? to.mode : 'default'">
      <ng-container *ngIf="opts$ | async as opts">
        <nz-option *ngFor="let o of $any(opts)" [nzValue]="o.value" [nzLabel]="o.label"></nz-option>
      </ng-container>
    </nz-select>
  `,
})
export class ZorrlySelect extends FieldType implements OnInit {
  opts$: any;

  constructor(private injector: Injector) {
    super();
  }

  async ngOnInit() {
    if (!!this.to.options_inject_token) {
      this.to.options = await this.injector.get(this.to.options_inject_token);
    }
    this.opts$ = Array.isArray(this.to.options) ? of(this.to.options) : this.to.options;
  }
}
