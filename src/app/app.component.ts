import { Component, VERSION } from '@angular/core';
import { AppService } from './app.service';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(public appService: AppService) {
    setTheme('bs3');
  }

  onHidden() {
    this.appService.onHide();
  }
}
