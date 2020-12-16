import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  id:any;
  empDetail: Object;
  constructor(private empService:EmpService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id')
    console.log(this.id)
    this.empService.empDetails(this.id).subscribe( data =>{
      this.empDetail = data['data'];
      console.log(this.empDetail)
    })

    
  }

}
