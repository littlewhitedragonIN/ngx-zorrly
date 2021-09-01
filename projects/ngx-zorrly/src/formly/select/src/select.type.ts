import {Component, Injector, OnInit} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'zorrly-select',
  template: `
    <ng-container *ngIf="$any(this.to.options)">
      <nz-select nzShowSearch nzAllowClear [formControl]="$any(formControl)" [nzMode]="to.mode ? to.mode : 'default'">
        <nz-option *ngFor="let o of $any(this.to.options)" [nzValue]="o.value" [nzLabel]="o.label"></nz-option>
      </nz-select>
    </ng-container>
  `,
})
export class ZorrlySelect extends FieldType implements OnInit {

  constructor(private injector: Injector) {
    super();
  }

  async ngOnInit() {
    if (!!this.to.options_inject_token) {
      this.to.options = await this.injector.get(this.to.options_inject_token);
    }
  }
}
