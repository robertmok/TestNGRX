import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './sample.routing';
import { ParentComponent } from './containers/index';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { Child2bComponent } from './components/child2b/child2b.component';
import { SampleService } from './services/index';

@NgModule({
  declarations: [
    ParentComponent,
    Child1Component,
    Child2Component,
    Child2bComponent
  ],
  imports: [
    CommonModule,
    routing,
  ],
  providers: [
    SampleService
  ],
  // exports: [
  //   ParentComponent,
  // ]
})
export class SampleModule { }
