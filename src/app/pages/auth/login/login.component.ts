import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { pagePaths } from 'src/app/core/config/router.config';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiErrorHandlerService } from 'src/app/core/utils/api-error-handler.service';
import { CustomValidator } from 'src/app/core/validators/email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  loadingText: string = '';
  googleLoadingText: string = '';
  googleLoading: boolean = false;

  signinForm: FormGroup;
  sub = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    // private socialService: SocialAuthService,
    private toastr: ToastrService,
    private errorHandler: ApiErrorHandlerService
  ) { }

  ngOnInit() {
    // this.router.events.subscribe(event => {
    //   if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
    //     this.loadingText = 'Loading Dashboard Module...';

    //     this.loading = true;
    //   }
    //   if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
    //     this.loading = false;
    //   }
    // });

    this.signinForm = this.fb.group({
      email: ['test@example.com', [Validators.required, CustomValidator.EmailValidator]],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.signinForm.controls;
  }

  signin() {

    this.sub = true;
    if (this.signinForm.invalid) {
      return
    }
    // this.loading = true;
    // this.loadingText = 'Sigining in...';
    this.createPayload('regular', this.signinForm.value);
  }

  signInWithGoogle() {
    // this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
    //   console.log(user);
    //   this.createPayload('google', user);
    // }, error => {
    //   console.log(error);
    // });
  }

  signInWithFB() {
    // this.socialService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
    //     console.log(user);
    // }, error => {
    //     console.log(error);
    // });
  }

  createPayload(type, data) {
    switch (type) {
      case 'regular':
        this.auth.signin(data)
          .subscribe(res => {
            this.router.navigateByUrl('/' + pagePaths.Dashboard);
            // this.loading = false;
            this.toastr.success('Success', 'Login successfully');
          }, (error) => {
            this.errorHandler.handleServerErrors(error);
          });
        break;
      case 'google':
        this.router.navigateByUrl('/' + pagePaths.Dashboard);
        this.toastr.success('Success', 'Login successfully');
        break;
      case 'facebook':

        break;

      default:
        break;
    }
  }
}
