import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormlyFieldConfig} from "@ngx-formly/core";
import {AppService} from "./app.service";

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
      key: 'input_number',
      type: 'number',
      templateOptions: {
        label: 'Input Number',
        placeholder: 'Input placeholder',
        required: true,
      }
    },
    {
      key: 'select_static',
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
      key: 'select_inject',
      type: 'select',
      templateOptions: {
        required: true,
        label: 'Select (Inject)',
        options$: 'options-stream:gender'
      }
    },
    {
      key: 'date_one',
      type: 'date',
      templateOptions: {
        label: 'Date One',
        range: '-3d:+1m'
      }
    },
    {
      key: 'date_two',
      type: 'date',
      templateOptions: {
        label: 'Date Two',
        showTime: {},
        range: '-3d:+3d:date_one'
      }
    },
    {
      key: 'text_long',
      type: 'textarea',
      templateOptions: {
        label: 'Long Text',
        rows: 2,
      }
    },
    {
      key: 'some_period',
      type: 'date-range',
      templateOptions: {
        label: 'Long Text',
        showTime: {},
      }
    }
  ];

  constructor(private app: AppService) {
  }


  ngOnInit(): void {
    this.app.model().subscribe((m) => this.model = m);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(JSON.stringify(this.model, null, 2));
    }
  }


}
