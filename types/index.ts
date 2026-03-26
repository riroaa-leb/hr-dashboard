export type EmployeeStatus = "Active" | "On Leave" | "Remote";

export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  status: EmployeeStatus;
  avatar: string;
  joined: string;
}

export interface Metric {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
  icon: string;
}

export interface DepartmentEntry {
  name: string;
  count: number;
  pct: number;
}

export interface ActivityEntry {
  type: "hire" | "leave" | "review" | "exit";
  text: string;
  time: string;
}

export interface NavItem {
  id: string;
  label: string;
  badge?: string;
}
