import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { SharedPipesModule } from './pipes/shared-pipes.module';
import { SharedDirectivesModule } from './directives/shared-directives.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { SharedLayoutsModule } from './layouts/shared-layouts.module';

const MODULES =[
  ToastrModule.forRoot({ timeOut: 1500, closeButton: true, progressBar: true, progressAnimation: 'increasing' }),
  // SharedComponentsModule,
  // SharedDirectivesModule,
  // SharedPipesModule,
  SharedPipesModule,
  SharedDirectivesModule,
  SharedComponentsModule,
  SharedLayoutsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MODULES
  ],
})
export class SharedModule { }
