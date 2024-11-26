import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.username === 'patient' && this.password === 'patient123') {
      // Simulate successful login
      this.router.navigate(['/user/dashboard']);
    } else if (this.username === 'admin' && this.password === 'admin123') {
      // Simulate admin login
      this.router.navigate(['/admin/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
