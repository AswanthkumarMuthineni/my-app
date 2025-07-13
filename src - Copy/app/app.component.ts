import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hospital-management-angular16';

   constructor(private authService: AuthService) {
    // Mock login for testing
    this.authService.login('test', 'password', 'PATIENT');
  }
}
