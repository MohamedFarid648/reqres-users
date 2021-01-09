import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/*Small template design from : 
https://stackoverflow.com/questions/43200545/create-a-responsive-toolbar-using-angular-material */
export class AppComponent {
  title = 'req-users';

  showSpinner: boolean = false;
 
  constructor(public spinnerService: SpinnerService,
    private httpClient: HttpClient) { }

}
