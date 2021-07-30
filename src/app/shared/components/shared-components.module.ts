import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleSharedComponentComponent } from './sample-shared-component/sample-shared-component.component';

const COMPONENTS = [
  SampleSharedComponentComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class SharedComponentsModule { }
