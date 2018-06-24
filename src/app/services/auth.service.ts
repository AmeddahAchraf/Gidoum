import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
@Injectable()

export class AuthService {
  private user: Observable<firebase.User>;
  userDetails='';

constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = _firebaseAuth.authState;
  }

  signInNormal(email, password) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }
  
  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }

}
