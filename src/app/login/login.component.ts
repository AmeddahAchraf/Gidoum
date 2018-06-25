import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  userFB=null;



  signInWithEmail() {
    this.authservice.signInNormal(this.user.email, this.user.password)
      .then((res) => {
        this.userFB=res;
        this.router.navigate(['home']);
      })
      .catch((err) =>{
          $('#erreur').html(err.message);
          $('#erreur').css('display','inline');
      } );
  }


  constructor(private authservice: AuthService, private router:Router){}


  ngOnInit() {
  }


}
