import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as V } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm !: FormGroup;
 
  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder
      ) { }
 
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: ['', [V.required]],
      pass: ['', [V.required]]
    });
  }
  login() {
    let user = this.loginForm.value.user;
    let pass = this.loginForm.value.pass;
    this.auth.login(user, pass).subscribe({
      next: data => {
        localStorage.setItem('userData', JSON.stringify(data));
      },
      error: err => {
        console.log(err);
        
        // console.log('Hiba! A belépés sikertelen!')
      }
    });
  }
}