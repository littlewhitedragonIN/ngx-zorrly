import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';
import {NzUploadFile} from "ng-zorro-antd/upload";

@Component({
  selector: 'zorrly-upload',
  template: `
    <nz-upload
      [nzHeaders]="{ authorization: 'authorization-text' }"
      [nzBeforeUpload]="beforeUpload" [(nzFileList)]="fileList"
    >
      <button nz-button>
        <i nz-icon nzType="upload"></i>
        Click to Upload
      </button>
    </nz-upload>
  `,
})
export class ZorrlyUpload extends FieldType {
  uploading = false;
  fileList: NzUploadFile[] = [];
  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  handleUpload(): void {

  }
}
