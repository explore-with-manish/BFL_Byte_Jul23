import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticatorService } from 'src/app/services/authenticator.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  returnUrl?: string;
  message?: string;
  login_sub?: Subscription;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
    private authService: AuthenticatorService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm?.controls; }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.authService.logout();
  }

  onSubmit(e: Event) {
    if (this.loginForm.valid) {
      this.login_sub = this.authService.login(this.f['username'].value, this.f['password'].value).subscribe({
        next: () => {
          this.router.navigate([this.returnUrl]);
        },
        error: (err) => {
          this.message = err;
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.login_sub?.unsubscribe();
  }
}
