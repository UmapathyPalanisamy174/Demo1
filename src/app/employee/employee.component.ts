import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee;
  empNo;
  constructor(private route:ActivatedRoute, private es:EmployeeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((routeParams)=>{
      this.empNo=routeParams['empno'] //Reading the parameter list for a particular emp no
      this.employee=this.es.getEmployeeByEmpid(this.empNo)
    })
  }
  

}
 