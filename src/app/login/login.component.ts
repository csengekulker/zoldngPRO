import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as V } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm !: FormGroup;
 
  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
      ) { }
 
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [V.required]],
      pass: ['', [V.required]]
    });
  }
  login() {
    let email = this.loginForm.value.email;
    let pass = this.loginForm.value.pass;
    this.auth.login(email, pass).subscribe({
      next: data => {
        localStorage.setItem('userData', JSON.stringify(data));
        this.router.navigate(['/int'])
      },
      error: err => {
        console.log(err);
        
        // console.log('Hiba! A belépés sikertelen!')
      }
    });
  }
}