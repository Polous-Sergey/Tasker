import {Component, OnInit} from '@angular/core';
import {ImageResult, Options} from 'ngx-image2dataurl';
import {RequestService} from '../services/request.service';
import {unescape} from 'querystring';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  username: string;
  email: string;
  text: string;
  fileToUpload: File = null;
  src: any;

  constructor(private request: RequestService) {
  }


  options: Options = {
    resize: {
      maxHeight: 320,
      maxWidth: 240
    },
    allowedExtensions: ['JPG', 'PnG', 'GIF']
  };

  ngOnInit() {
  }

  selected(imageResult: ImageResult) {
    if (imageResult.error) {
      console.log(imageResult.error);
    } else {
      this.src = imageResult.resized
        && imageResult.resized.dataURL
        || imageResult.dataURL;
      const blob = this.dataURItoBlob(this.src);
      this.fileToUpload = new File([blob], 'imageFileName.png');
    }
  }


  dataURItoBlob(dataURI) {
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
    }
    else {
      byteString = unescape(dataURI.split(',')[1]);
      const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      const ia = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], {type: mimeString});
    }
  }

  getInf() {
    this.request.get().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  create() {
    const form = new FormData();
    form.append('username', this.username);
    form.append('email', this.email);
    form.append('text', this.text);
    form.append('image', this.fileToUpload, 'pic');
    console.log(this.src);
    this.request.create(form).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
