import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuth = authService.isAuthenticated();
  const isEcout = authService.isEcoutant();

  console.log('Guard check - isAuthenticated:', isAuth, 'isEcoutant:', isEcout);
  console.log('Token:', authService.getToken());
  console.log('User:', authService.getCurrentUser());

  if (isAuth && isEcout) {
    return true;
  }

  // Rediriger vers la page de connexion
  router.navigate(['/connexion'], { queryParams: { returnUrl: state.url } });
  return false;
};
