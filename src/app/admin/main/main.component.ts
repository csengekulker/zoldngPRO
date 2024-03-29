import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'admin-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export default class MainComponent {

  constructor(private auth: AuthService, private router: Router) {}

  requestLogout() {    
    this.auth.logout()

  }
}
