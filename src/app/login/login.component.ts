import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl,  Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ILogin } from './login';

@Component({
  selector: 'mstr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscription!: Subscription;
  
  userLogin: ILogin = {
    "username": "",
    "password": "",
    "loginMode": 1,
    "maxSearch": 3,
    "workingSet": 10,
    "changePassword": false,
    "newPassword": "string",
    "metadataLocale": "en_us",
    "warehouseDataLocale": "en_us",
    "displayLocale": "en_us",
    "messagesLocale": "en_us",
    "numberLocale": "en_us",
    "timeZone": "UTC",
    "applicationType": 35
    }

  loginForm = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "password": new FormControl(""),
  });

  constructor(private authService: AuthService){}

  submit() {
    //TODO: validate username and password at form level before sumitting to login.
    this.userLogin.username = this.loginForm.controls.userName.value as string;
    this.userLogin.username = this.loginForm.controls.userName.value as string;
    this.subscription = this.authService.login(this.userLogin).subscribe({
      next: response => {
        console.log(`Auth token: ${response.headers.get('X-MSTR-AuthToken')}`)
      }
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
