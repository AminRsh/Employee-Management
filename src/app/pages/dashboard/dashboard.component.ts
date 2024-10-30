import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponse, Dashboard, EarnedLeave, LeaveRequest, RecentEmployee, RecentProject } from '../../model/master';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  masterSrv = inject(MasterService);
  dashboardObj: Dashboard = new Dashboard(0, 0, [], [])
  recentEmployeeList = signal<RecentEmployee[]>([]);
  recentProjects = signal<RecentProject[]>([]);
  earnedLeaves: EarnedLeave[] = [];
  totalEarnedLeaves = signal<number>(0);
  requstList: LeaveRequest[] = [];
  approvedCount = signal<number>(0);
  newCount = signal<number>(0);

  ngOnInit(): void {
    this.getDashboard();
    this.getLeaveData();
    this.getAllRequstData();
  }

  getDashboard() {
    this.masterSrv.getDashboardInfo().subscribe((res: Dashboard) => {
      if (res) {
        this.dashboardObj = res
        this.recentEmployeeList.set(res.recentEmployee);
        this.recentProjects.set(res.recentProjects);
      } else {
        alert("Something Went Wrong")
      }
    })
  }

  getLeaveData() {
    this.masterSrv.getAllEarnedLeaves().subscribe((res: APIResponse) => {
      this.earnedLeaves = res.data;
      this.calculateTotalEarnedLeaves();
    })
  }

  private calculateTotalEarnedLeaves() {
    const sum = this.earnedLeaves.reduce((acc, leave) => acc + leave.totalEarnedLeaves, 0);
    this.totalEarnedLeaves.set(sum);
  }

  getAllRequstData() {
    this.masterSrv.getAllLeaveRequest().subscribe((res: APIResponse) => {
      this.requstList = res.data;
      this.calculateStatusCounts()
    })
  }

  private calculateStatusCounts() {

    const approved = this.requstList.filter(request => request.status === "Approved").length;
    this.approvedCount.set(approved);

    const newRequests = this.requstList.filter(request => request.status === "New").length;
    this.newCount.set(newRequests);
  }

}
