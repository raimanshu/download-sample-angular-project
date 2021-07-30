import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleSharedDirectiveDirective } from './sample-shared-directive.directive';

const COMPONENTS = [
  SampleSharedDirectiveDirective
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class SharedDirectivesModule { }
