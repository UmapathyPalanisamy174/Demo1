import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { EmployeeService } from './employee.service';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesListComponent,
    ProductsListComponent,
    ContactusComponent,
    PageNotfoundComponent,
    EmployeeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'employees',component:EmployeesListComponent,children:[{path:':empno',component:EmployeeComponent}]},
      //{path:'employees/:empno',component:EmployeeComponent},
      {path:'products',component:ProductsListComponent,children:[{path:':prodno',component:ProductComponent}]},
      {path:'contactus',component:ContactusComponent},
      {path:'',redirectTo:'/home',pathMatch:'full'},
      {path:'**',component:PageNotfoundComponent}
    ])
  ],
  providers: [EmployeeService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
