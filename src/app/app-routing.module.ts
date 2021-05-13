import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BouquesComponent } from './bouques/bouques.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FlowersComponent } from './flowers/flowers.component';
import { FlowervaseComponent } from './flowervase/flowervase.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'register',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  { path:'contactus',component:ContactusComponent},
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





