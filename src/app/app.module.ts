s (36 sloc)  1.28 KB
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { PhoneformatterPipe } from './utils/phoneformatter.pipe';
import { CountryListComponent } from './country-list/country-list.component';
import { TableHeaderComponent } from './table-header/table-header.component';


import {LookupService} from "./services/lookup.service";
import {RegisterService} from "./services/register.service";
import { RegisterComponent } from './register/register.component';
import { NumbersonlyDirective } from './numbersonly.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProductsComponent,
    PhoneformatterPipe,
    CountryListComponent,
    TableHeaderComponent,
    RegisterComponent,
    NumbersonlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LookupService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }