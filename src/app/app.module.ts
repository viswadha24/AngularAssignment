import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { BouquesComponent } from './bouques/bouques.component';
import { FlowervaseComponent } from './flowervase/flowervase.component';
import { FlowersComponent } from './flowers/flowers.component';
import { Product1Component } from './product1/product1.component';
import { EmployeesComponent } from './employees/employees.component';
import { Employees1Component } from './employees1/employees1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    ProductsComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailsComponent,
    MobilesComponent,
    BouquesComponent,
    FlowervaseComponent,
    FlowersComponent,
    Product1Component,
    EmployeesComponent,
    Employees1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
