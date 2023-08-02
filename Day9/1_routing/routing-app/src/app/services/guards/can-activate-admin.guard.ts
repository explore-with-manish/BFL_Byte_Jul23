import { inject } from "@angular/core";
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthenticatorService } from "../authenticator.service";

export const canActivateAdminGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authenticatorService = inject(AuthenticatorService);
    const router = inject(Router);

    if (authenticatorService.getToken()) {
      return true;
    } else {
      router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  };
