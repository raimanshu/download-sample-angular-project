import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { pagePaths } from 'src/app/core/config/router.config';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiErrorHandlerService } from 'src/app/core/utils/api-error-handler.service';
import { MustMatch } from 'src/app/core/validators/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading: boolean = false;
  loadingText: string;
  signup: FormGroup;
  sub = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private errorHandler: ApiErrorHandlerService
  ) { }

  ngOnInit() {
    this.initializeRegistration();
  }

  initializeRegistration() {
    this.signup = this.fb.group({

      full_name: ['Testing Form', Validators.required],
      email: ['test@example.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['123456', Validators.required]
    }, {
      validators: MustMatch('password', 'password_confirmation')

    })
  }

  get f() {
    return this.signup.controls;
  }
  onSubmit() {
    this.sub = true;
    if (this.signup.invalid) {
      return
    }
    this.loading = true;
    this.loadingText = 'Registering user...';
    this.auth.signup(this.signup.value)
      .subscribe(res => {
        console.log(this.signup.value);
        this.router.navigateByUrl('/' + pagePaths.Sessions + '/' + pagePaths.Login);
        this.loading = false;
        this.toastr.success('Success', 'User registered successfully');
      }, (error) => {
        this.errorHandler.handleServerErrors(error);
      });
  }
}
