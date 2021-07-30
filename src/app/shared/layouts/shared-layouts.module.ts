import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  AuthLayoutComponent,
  PageLayoutComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...COMPONENTS]
})
export class SharedLayoutsModule { }
