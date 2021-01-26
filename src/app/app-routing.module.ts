import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HaoxiangComponent } from './haoxiang/haoxiang.component';

const routes: Routes = [
  { path: '', component: HaoxiangComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
