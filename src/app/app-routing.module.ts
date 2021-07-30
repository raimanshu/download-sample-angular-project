import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pagePaths, statusResponseCode } from './core/config/router.config';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { PageLayoutComponent } from './shared/layouts/page-layout/page-layout.component';

const routes: Routes = [
  {
    path: pagePaths.Empty,
    canActivate: [AuthGuard],
    redirectTo: pagePaths.Dashboard,
    pathMatch: pagePaths.Full
  },
  {
    path: pagePaths.Empty,
    component: AuthLayoutComponent,
    canActivate: [GuestGuard],
    children: [
      {
        path: pagePaths.Sessions,
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: pagePaths.Empty,
    // component: BlankLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: pagePaths.Others,
        loadChildren: () => import('./pages/others/others.module').then(m => m.OthersModule)
      }
    ]
  },
  {
    path: pagePaths.Empty,
    component: PageLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: pagePaths.Dashboard,
        loadChildren: () => import('./pages/sample-module/sample-module.module').then(m => m.SampleModuleModule)
      }
    ]
  },
  {
    path: pagePaths.wildcardRoute,
    redirectTo: pagePaths.Others + '/' + statusResponseCode.pageNotFound,
    pathMatch: pagePaths.Full
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
