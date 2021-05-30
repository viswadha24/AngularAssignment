import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BouquesComponent } from './bouques/bouques.component';
import {Employees1Component} from './employees1/employees1.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmployeesComponent } from './employees/employees.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FlowervaseComponent } from './flowervase/flowervase.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponentComponent } from './user-details-component/user-details-component.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  {path:'emp-info',component:EmployeesComponent},
  { path:'register',component:RegisterComponent},
  {path:'users',component:UsersComponent},
  {path:'userdetails/:id',component:UserDetailsComponent},
  { path:'login',component:LoginComponent},
  { path:'contactus',component:ContactusComponent},
  {path:'emp1-info',component:Employees1Component},
  { path:'products',component:ProductsComponent,children:[
    {path:'flowers',component:FlowersComponent},
    {path:'bouques',component:BouquesComponent},
    {path:'flower-vase',component:FlowervaseComponent},
    {path:"",redirectTo:"/products/flowers",pathMatch:"full"}
  ]},
  { path:'', redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





