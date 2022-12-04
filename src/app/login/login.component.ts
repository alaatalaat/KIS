import { UserAuthService } from './../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../add-new-product/login-user';
import { usernameValidator } from '../asyncValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = new LoginUser('','',false);

  constructor(private authService:UserAuthService) {

  }
  isUserLoged:boolean = false ;
  ngOnInit(): void {
    this.authService.getLogedStatus().subscribe(status=>this.isUserLoged = status);
  }

  submit(){
    console.log(this.loginData);
    this.authService.login('username','password');
  }


}
