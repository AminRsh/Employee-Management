
export class Employee {
    employeeId: number;
    employeeName: string;
    contactNo: string;
    emailId: string;
    deptId: number;
    password: string;
    gender: string;
    role: string;

    constructor() {
        this.employeeId = 0;
        this.employeeName = '';
        this.contactNo = '';
        this.emailId = '';
        this.deptId = 0;
        this.password = '';
        this.gender = '';
        this.role = 'Employee';
    }
}

export class ParentDept {
    departmentId: number;
    departmentName: string;
    departmentLogo: string;

    constructor() {
        this.departmentId = 0;
        this.departmentName = "";
        this.departmentLogo = "";
    }
}

export interface ChildDept {
    childDeptId: number,
    parentDeptId: number,
    departmentName: string,
}

export interface APIResponse {
    message: string,
    result: boolean,
    data: any
}

export interface LeaveType {
    leaveTypeId: number,
    typeName: string,
}

export interface EarnedLeave {
    earnedLeaveId: number,
    employeeId: number,
    totalEarnedLeaves: number,
    totalSickEarnedLeaves: number,
    lastUpdatedDate: string,
    employeeName: string
}

export interface LeaveRequest {
    leaveId: number,
    employeeId: number,
    leaveTypeId: number,
    startDate: number,
    endDate: string,
    status: string,
    reason: string,
    requestDate: string,
    employeeName: string,
    contactNo: string,
    typeName: string
}

export class Dashboard {
    totalEmployee: number
    totalProject: number
    recentEmployee: RecentEmployee[]
    recentProjects: RecentProject[]

    constructor(totalEmployee: number, totalProject: number, recentEmployee: RecentEmployee[], recentProjects: RecentProject[]) {
        this.totalEmployee = totalEmployee;
        this.totalProject = totalProject;
        this.recentEmployee = recentEmployee;
        this.recentProjects = recentProjects;
    }
}

export interface RecentEmployee {
    employeeId: number
    employeeName: string
    contactNo: string
    emailId: string
    deptId: number
    password: string
    gender: string
    role: string
    createdDate: string
}

export interface RecentProject {
    projectId: number
    projectName: string
    clientName: string
    startDate: string
    leadByEmpId: number
    contactPerson: string
    contactNo: string
    emailId: string
}


