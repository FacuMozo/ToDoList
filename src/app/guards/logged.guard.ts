import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const loggedGuard: CanActivateFn = (route, state) => {
  const as = inject(AuthenticationService);
  const rtr = inject(Router);
  if (as.isLoggedIn()) return as.isLoggedIn();
  else {
    rtr.navigateByUrl('/login');
    return false;
  }
};
