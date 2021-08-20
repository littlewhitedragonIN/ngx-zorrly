import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'Input placeholder',
        required: true,
      }
    },
    {
      key: 'input-number',
      type: 'number',
      templateOptions: {
        label: 'Input Number',
        placeholder: 'Input placeholder',
        required: true,
      }
    },
    {
      key: 'select-static',
      type: 'select',
      templateOptions: {
        label: 'Select (Static)',
        options: [
          {value: 'M', label: 'Male'},
          {value: 'F', label: 'Female'}
        ]
      }
    },
    {
      key: 'select-inject',
      type: 'select',
      templateOptions: {
        label: 'Select (Inject)',
        options_inject_token: 'sample-options',
        options: []
      }
    },
    {
      key: 'date-one',
      type: 'date',
      templateOptions: {
        label: 'Date One',
        range: '-3d:+1m'
      }
    },
    {
      key: 'date-two',
      type: 'date',
      templateOptions: {
        label: 'Date One',
        range: '-3d:+1m:date-one'
      }
    }
  ];

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }


}
