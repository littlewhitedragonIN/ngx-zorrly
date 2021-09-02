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
        required: true,
        label: 'Select (Inject)',
        options$: 'options-stream:gender'
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
    },
    {
      key: 'text-long',
      type: 'textarea',
      templateOptions: {
        label: 'Long Text',
        rows: 2,
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
