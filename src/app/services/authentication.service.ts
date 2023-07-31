import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }



  login(user: string, password: string) {
    
    
    if (user == 'admin' && password == '1234') {
      sessionStorage.setItem('user', user);
      sessionStorage.setItem('password', password);
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.clear();
  }

  isLoggedIn() {
    let user = sessionStorage.getItem('user');
    let pass = sessionStorage.getItem('password');
    if (user && pass) {
      return this.login(user, pass);
    }
    return false;
  }
}

