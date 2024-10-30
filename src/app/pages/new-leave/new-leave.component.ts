import { Employee, LeaveRequest,  APIResponse, LeaveType} from './../../model/master';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-leave',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, DatePipe],
  templateUrl: './new-leave.component.html',
  styleUrl: './new-leave.component.css'
})
export class NewLeaveComponent implements OnInit{

  leaveForm: FormGroup = new FormGroup({});
  masterSrv = inject(MasterService);
  LeaveTypeList = signal<LeaveType []>([]);
  employee$: Observable<Employee[]> = new Observable<Employee[]>();
  requstList: LeaveRequest [] = [];

  constructor() {
    this.initializeForm();
  }

  initializeForm() {
    this.leaveForm = new FormGroup({
      leaveId: new FormControl(0),
      employeeId: new FormControl(this.masterSrv.loggedUserData.employeeId),
      leaveTypeId: new FormControl(0),
      startDate: new FormControl(""),
      endDate: new FormControl(""),
      status: new FormControl("New"),
      reason: new FormControl(""),
      requestDate: new FormControl(new Date()),
    })
    if (this.masterSrv.loggedUserData.role == 'Employee') {
      this.leaveForm.controls['employeeId'].disable();
    }
  }

  ngOnInit(): void {
    this.getLeaveType();
    this.getGriData();
    this.employee$ = this.masterSrv.getAllEmployees();
  }

  getGriData() {
    if (this.masterSrv.loggedUserData.role == "Employee") {
      this.getData();
    } else {
      this.getAllData();
    }
  }

  getLeaveType(){
    this.masterSrv.getLeaveTypes().subscribe((res:APIResponse) => {
      this.LeaveTypeList.set(res.data)
    })
  }

  onSave(){
    const formValue = this.leaveForm.getRawValue();
    this.masterSrv.newRequest(formValue).subscribe((res:APIResponse) => {
      if (res.result) {
        alert("Request Raised");
        this.getGriData();
      } else {
        alert(res.message);
      }
    })
  }

  getData() {
    this.masterSrv.getAllLeaveRequestByEmpId(this.masterSrv.loggedUserData.employeeId).subscribe((res:APIResponse) => {
      this.requstList = res.data;
    })
  }

  getAllData() {
    this.masterSrv.getAllLeaveRequest().subscribe((res:APIResponse) => {
      this.requstList = res.data;
    })
  }

  changeStatus(id:number) {
    this.masterSrv.changeLeaveRequest(id,'Approved').subscribe((res:APIResponse) => {
      this.LeaveTypeList.set(res.data);
      this.getGriData();
    })
  }
}
