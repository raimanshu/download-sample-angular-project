import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleSharedPipePipe } from './sample-shared-pipe.pipe';

const COMPONENTS = [
  SampleSharedPipePipe
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class SharedPipesModule { }
