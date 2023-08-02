import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }

  private adminUser : string = 'user';
  private adminPassword : string = '1234';

  login(inputUser: string, inputPassword: string) {
    
    
    if ( inputUser == this.adminUser && inputPassword == this.adminPassword) {
      sessionStorage.setItem('user', this.adminUser);
      sessionStorage.setItem('password', this.adminPassword);
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

  isLoggedIn() {
    let user = sessionStorage.getItem('user');
    let pass = sessionStorage.getItem('password');
    if (user && pass) {
      return this.login(user, pass);
    }
    return false;
  }

  getUser(): string{
    return this.adminUser;
  }

  getPassword(): string{
    return this.adminPassword;
  }
}

