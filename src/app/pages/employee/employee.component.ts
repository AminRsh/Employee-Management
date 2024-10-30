import { Component, inject, OnInit } from '@angular/core';
import { APIResponse, ChildDept, Employee, ParentDept } from '../../model/master';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  
  employeeObj: Employee = new Employee();
  parentDeptId: string = '';
  masterSrv = inject(MasterService)
  parentDepartmentList: ParentDept [] = [];
  childDepartmentList: ChildDept  [] = [];
  employeeList: Employee [] = [];
  parentDepartmentObj: ParentDept = new  ParentDept()

  ngOnInit(): void {
    this.loadEmployee();
    this.loadParentDept();
  }

  loadParentDept() {
    this.masterSrv.getDepartment().subscribe((res: APIResponse) => {
      this.parentDepartmentList = res.data;
    })
  }

  getAllChild() {
    this.masterSrv.getAllChildDepartment().subscribe((res: APIResponse) => {
      this.childDepartmentList = res.data;
    })
  }

  loadEmployee() {
    this.masterSrv.getAllEmployees().subscribe((res: Employee[]) => {
      this.employeeList = res;
    })
  }

  onDeptChange() {
    this.masterSrv.getChildDepartmentByParentId(this.parentDeptId).subscribe((res: APIResponse) => {
      this.childDepartmentList = res.data;
    })
  }

  onSaveEmployee(){
    this.masterSrv.createNewEmployee(this.employeeObj).subscribe(
      (res: Employee) => {
        alert("Employee Created Success");
        this.employeeObj = new Employee(); 
        this.loadEmployee();
      },
      (error) => {
        alert("Failed to create employee: " + error.message);
        console.error('Error occurred:', error);
      }
    );
  }

  onUpdateEmployee(){
    this.masterSrv.updateEmp (this.employeeObj).subscribe(
      (res: Employee) => {
        alert("Employee Updated. Success");
        this.employeeObj = new Employee(); 
        this.loadEmployee();
      },
      (error) => {
        alert("Failed to create employee: " + error.message);
        console.error('Error occurred:', error);
      }
    );
  }
  
  onEdit(item: Employee) {
    this.employeeObj = item;
    this.getAllChild();
  }

  onDelete(id: number) {
    const isDelete = confirm("Are u Sure Want to Delete?");
    if (isDelete) {
      this.masterSrv.deleteEmp(id).subscribe((res: Employee) => {
        // debugger;
        alert("Success")
        this.loadEmployee();
      })
    }
  }

  addNewDepartment() {
    this.masterSrv.addParentDept(this.parentDepartmentObj).subscribe((res:APIResponse) => {
      if (res.result) {
        alert("New Department Created!")
      } else {
        alert(res.message)
      }
    })
  }

}


