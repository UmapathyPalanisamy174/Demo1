import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employees= [
    {"city":"Bangalore","doj":"September 6,2006","empno":1231,"name":"Thangaraj S","phone":"9886008042","salary":34567.7734},
    {"city":"Pune","doj":"October 07,2006","empno":1232,"name":"Rahul Ghali","phone":"9900675433","salary":12345.6698},
    {"city":"Trivendrum","doj":"November 03,2003","empno":1233,"name":"SindhuSNambiar","phone":"0987654321","salary":34343.9967},
    {"city":"Bangalore","doj":"January 01,2010","empno":1234,"name":"Yadavi N Swamy","phone":"1234567890","salary":23232.4456},
    {"city":"Gurgaon","doj":"May 15,  2003","empno":1235,"name":"Varun Raghav","phone":"0987343434","salary":25356.8832},
    {"city":"Delhi","doj":"June 09,2010","empno":1236,"name":"Virat Kohli","phone":"8484848484","salary":23311.5455}
 ]
 getEmployees()
 {
   return this.employees;
 }
 getEmployeeByEmpid(eno)
 {
   for (let i=0;i<this.employees.length;i++)
   {
     if (this.employees[i].empno ==eno) 
     {
       return this.employees[i];
     }
   }
 }
}
