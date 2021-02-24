import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageConstants } from '../constants/storage';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  userData: any = [];
  isValidUser: boolean = false;
  userPassword: string;
  userName: string;
  product: any[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.httpClient.get('assets/user.json').subscribe((data) => {
      console.log(data);
      this.userData = data;
    });
    this.loadUser();
    this.userPatching();
  }
  async loadUser() {
    this.userName = localStorage.getItem(StorageConstants.USERNAME) || '';
    this.userPassword = localStorage.getItem(StorageConstants.PASSWORD) || '';
  }

  private userPatching() {
    this.form.patchValue(
      {
        email: this.userName,
        password: this.userPassword,
      },
      { emitEvent: false }
    );
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log('hhhhhhhhhh');
      return;
    }
    let username = this.form.get('email').value;
    let password = this.form.get('password').value;

    if (this.userData.some((element) => element.userName == username)) {
      this.userData.forEach((element) => {
        if (element.userName == username) {
          if (element.Password == password) {
            this.isValidUser = false;
            localStorage.setItem(StorageConstants.ROLE, element.role);
          } else {
            this.isValidUser = true;
          }
        }
      });
    } else {
      this.isValidUser = true;
    }

    if (!this.isValidUser) {
      localStorage.setItem(StorageConstants.USERNAME, username);
      localStorage.setItem(StorageConstants.PASSWORD, password);
      this.router.navigate(['dashboard/home']);
    }
  }
}
