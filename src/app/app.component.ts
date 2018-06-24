import { Component } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(auth:AngularFireAuthModule)
    {
        
    }
}
