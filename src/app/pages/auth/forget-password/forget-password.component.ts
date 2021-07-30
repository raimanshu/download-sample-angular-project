import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { pagePaths } from 'src/app/core/config/router.config';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiErrorHandlerService } from 'src/app/core/utils/api-error-handler.service';
import { CustomValidator } from 'src/app/core/validators/email.validator';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgotPassword: FormGroup;
  sub: boolean = false;
  loading: boolean = false;
  loadingText: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService,
    private errorHandler: ApiErrorHandlerService
  ) { }

  ngOnInit(): void {
    this.ForgetformIntialization();
  }

  get f() {
    return this.forgotPassword.controls;
  }

  ForgetformIntialization() {
    this.forgotPassword = this.fb.group({
      email: ['test@example.com', [Validators.required, CustomValidator.EmailValidator]]
    })
  }

  onForgotForm() {
    this.sub = true;
    if (this.forgotPassword.invalid) {
      return
    }
    // this.loading = true;
    // this.loadingText = 'Sending code...';
    this.auth.resetPassword(this.forgotPassword.value)
      .subscribe(res => {
        console.log(this.forgotPassword.value);
        this.toastr.success('Success', 'OTP sent to registered mail');
        this.router.navigateByUrl('/' + pagePaths.Sessions + '/' + pagePaths.Login);
        // this.loading = false;

      }, (error) => {
        this.errorHandler.handleServerErrors(error);
      });
  }

}
