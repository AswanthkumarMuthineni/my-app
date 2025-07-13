import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password, role } = this.loginForm.value;
      this.authService.login(username, password, role);
      switch (role) {
        case 'ADMIN':
          this.router.navigate(['/admin/dashboard']);
          break;
        case 'DOCTOR':
          this.router.navigate(['/doctor/dashboard']);
          break;
        case 'PATIENT':
          this.router.navigate(['/patient/search']);
          break;
        default:
          alert('Invalid role');
      }
    }
  }
}
