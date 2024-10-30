import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { APIResponse, EarnedLeave, Employee } from '../../model/master';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-earned-leave',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, DatePipe],
  templateUrl: './earned-leave.component.html',
  styleUrl: './earned-leave.component.css'
})

export class EarnedLeaveComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  masterSrv = inject(MasterService);
  employee$: Observable<Employee[]> = new Observable<Employee[]>();
  earnedLeaves: EarnedLeave[] = [];

  constructor() {
    this.initializeForm();
    this.employee$ = this.masterSrv.getAllEmployees();
  }


  initializeForm() {
    this.form = new FormGroup({
      earnedLeaveId : new FormControl(0),
      employeeId : new FormControl(0),
      totalEarnedLeaves : new FormControl(0),
      lastUpdatedDate : new FormControl(new Date()),
    })
  } 

  onSave() {
    const formValue = this.form.value;
    this.masterSrv.addEarnedLeave(formValue).subscribe((res:APIResponse) => {
      // debugger;
      if (res.data) {
        alert("Leave Modifed")
      } else {
        alert(res.message)
      }
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.masterSrv.getAllEarnedLeaves().subscribe((res:APIResponse) => {
      // console.log(res.data)
      this.earnedLeaves = res.data;
    })
  }
}
