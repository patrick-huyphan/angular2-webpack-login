import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {App} from '../../app';
import {LocalJWT} from '../../services/local-jwt/local-jwt';
import {Login} from '../login/login';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, ...ROUTER_DIRECTIVES, Login],
  providers: [],
  pipes: [],
  styles: [require('./home.scss')],
  template: require('./home.html')
})

export class Home {
  jwt: string;
  profile: any;

  jwtDecode = require('jwt-decode');

  constructor(public _router: Router, public _jwt: LocalJWT) {
    //if (!_jwt.fetchJWT()) { this._router.navigate(['Login']); } // Force Page to Login

    this.jwt = _jwt.fetchJWT();
    this.profile = _jwt.parseJWT(this.jwt);

    //this.getCategory(2);
  }

  logout() {
    App._loggedOutObserver.next(true);
  }

}
