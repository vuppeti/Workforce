import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {path:'', component:EmployeeListComponent},
  {path:'emplist', component:EmployeeListComponent},
  {path:'empinfo', component:EmployeeInfoComponent},
  {path:'addemp', component:AddEmpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
