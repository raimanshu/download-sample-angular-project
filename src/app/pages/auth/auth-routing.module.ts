import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pagePaths } from 'src/app/core/config/router.config';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: pagePaths.Register,
    component: RegisterComponent
  },
  {
    path: pagePaths.Login,
    component: LoginComponent
  },
  {
    path: pagePaths.ForgetPassword,
    component: ForgetPasswordComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
