import {Component} from '@angular/core';
import {RequestService} from './services/request.service';
import {Options, ImageResult} from 'ngx-image2dataurl';
import {unescape} from 'querystring';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
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
