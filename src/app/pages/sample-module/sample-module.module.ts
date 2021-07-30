import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleModuleRoutingModule } from './sample-module-routing.module';
import { SampleComponentComponent } from './sample-component/sample-component.component';


@NgModule({
  declarations: [SampleComponentComponent],
  imports: [
    CommonModule,
    SampleModuleRoutingModule
  ]
})
export class SampleModuleModule { }
