import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HaoxiangComponent } from './haoxiang/haoxiang.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { SubmitformComponent } from './submitform/submitform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HaoxiangComponent,
    MenuComponent,
    AboutComponent,
    DetailsComponent,
    SubmitformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
