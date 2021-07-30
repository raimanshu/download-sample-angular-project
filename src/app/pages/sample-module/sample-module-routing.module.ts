import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponentComponent } from './sample-component/sample-component.component';

const routes: Routes = [
  {
    path:"",
  component: SampleComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleModuleRoutingModule { }
