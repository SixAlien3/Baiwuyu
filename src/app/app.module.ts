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
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HaoxiangComponent,
    MenuComponent,
    AboutComponent,
    DetailsComponent,
    SubmitformComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
