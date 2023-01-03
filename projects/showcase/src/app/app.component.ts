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
      key: 'some-desc',
      type: 'description',
      props: {
        disabled: true,
        style: 'margin:10px; color: red',
        html: '<strong> Student Residence Office </strong>provides on-campus accommodation for almost 3,700 students. Our goal is to create a safe, supportive and stimulating residential community that embraces diversity, participation, learning and development of professionalism.'
      }
    }, {
      key: 'uploads',
      type: 'upload',
      props: {
        label: 'Some Uploads',
        placeholder: 'Input placeholder',
        required: true,
      }
    }, {
      key: 'input',
      type: 'input',
      props: {
        label: 'Input',
        placeholder: 'Input placeholder',
        required: true,
      }
    },
    {
      key: 'input_checkbox',
      type: 'checkbox',
      props: {
        label: '',
        style: 'margin-left:50px',
        placeholder: 'Input placeholder',
        required: true,
      }
    },
    {
      key: 'input_number',
      type: 'number',
      props: {
        label: 'Input Number',
        placeholder: 'Input placeholder',
        required: true,
      }
    },
    {
      key: 'select_static',
      type: 'select',
      props: {
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
      props: {
        required: true,
        label: 'Select (Inject)',
        options$: 'options-stream:gender'
      }
    },
    {
      key: 'date_one',
      type: 'date',
      props: {
        label: 'Date One',
        range: '-3d:+1m'
      }
    },
    {
      key: 'date_two',
      type: 'date',
      props: {
        label: 'Date Two',
        showTime: {},
        range: '-3d:+3d:date_one'
      }
    },
    {
      key: 'text_long',
      type: 'textarea',
      props: {
        label: 'Long Text',
        rows: 2,
      }
    },
    {
      key: 'some_period',
      type: 'date-range',
      props: {
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
