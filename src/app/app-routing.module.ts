import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HaoxiangComponent } from './haoxiang/haoxiang.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { SubmitformComponent } from './submitform/submitform.component'


const routes: Routes = [
  { path: '', component: HaoxiangComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'about', component: AboutComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'submitform', component: SubmitformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
