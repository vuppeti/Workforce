import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  empData: Object;
  pageNo:any = 1;
  empsContainer: boolean;

  constructor(private empService:EmpService, private router:Router) { }

  ngOnInit(): void {
    this.empsContainer = null;
    this.updateEmpNo(this.pageNo)
  }
  updateEmpNo(pageNo){
    this.empService.empList(pageNo).subscribe(data =>{
      this.empData = data;
      console.log(this.empData)
    })
  }

  routeEmpInfo(id){
    localStorage.setItem('id', id);
    this.router.navigate(['/empinfo'],{skipLocationChange:true});
  }
}
