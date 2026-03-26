import { Employee, Metric, DepartmentEntry, ActivityEntry, NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { id: "dashboard",   label: "Dashboard" },
  { id: "employees",   label: "Employees" },
  { id: "recruitment", label: "Recruitment", badge: "14" },
  { id: "payroll",     label: "Payroll" },
  { id: "reports",     label: "Reports" },
  { id: "settings",    label: "Settings" },
];

export const METRICS: Metric[] = [
  { label: "Total Employees", value: "248",    delta: "+12 this month",  positive: true,  icon: "👥" },
  { label: "Open Positions",  value: "14",     delta: "3 urgent",        positive: false, icon: "📋" },
  { label: "Avg. Tenure",     value: "2.4 yrs",delta: "+0.3 vs last yr", positive: true,  icon: "📅" },
  { label: "Retention Rate",  value: "91%",    delta: "+2% vs last yr",  positive: true,  icon: "📈" },
];

export const DEPARTMENT_DATA: DepartmentEntry[] = [
  { name: "Engineering", count: 82, pct: 33 },
  { name: "Design",      count: 34, pct: 14 },
  { name: "Marketing",   count: 28, pct: 11 },
  { name: "Analytics",   count: 22, pct: 9  },
  { name: "People Ops",  count: 18, pct: 7  },
  { name: "Other",       count: 64, pct: 26 },
];

export const DEPT_COLORS: Record<string, string> = {
  Engineering: "#6366f1",
  Design:      "#8b5cf6",
  Marketing:   "#ec4899",
  Analytics:   "#f59e0b",
  "People Ops":"#10b981",
  Other:       "#94a3b8",
};

export const AVATAR_COLORS = [
  "#6366f1","#8b5cf6","#ec4899","#f59e0b","#10b981","#3b82f6",
];

export const RECENT_ACTIVITY: ActivityEntry[] = [
  { type: "hire",   text: "Maya Frem joined as Backend Engineer",         time: "2h ago"    },
  { type: "leave",  text: "Rami Azar's leave request was approved",       time: "5h ago"    },
  { type: "review", text: "Q1 performance reviews due in 3 days",         time: "Today"     },
  { type: "hire",   text: "New offer sent to Jad Moussa",                 time: "Yesterday" },
  { type: "exit",   text: "Offboarding initiated for Tony Khoury",        time: "Yesterday" },
];

export const EMPLOYEES: Employee[] = [
  { id: 1, name: "Sara Khalil",  role: "Product Designer",    department: "Design",      status: "Active",   avatar: "SK", joined: "Jan 2022" },
  { id: 2, name: "Omar Haddad",  role: "Frontend Engineer",   department: "Engineering", status: "Remote",   avatar: "OH", joined: "Mar 2021" },
  { id: 3, name: "Lina Nassar",  role: "HR Manager",          department: "People Ops",  status: "Active",   avatar: "LN", joined: "Aug 2020" },
  { id: 4, name: "Rami Azar",    role: "Data Analyst",        department: "Analytics",   status: "On Leave", avatar: "RA", joined: "Nov 2022" },
  { id: 5, name: "Maya Frem",    role: "Backend Engineer",    department: "Engineering", status: "Active",   avatar: "MF", joined: "Feb 2023" },
  { id: 6, name: "Karim Saleh",  role: "Marketing Lead",      department: "Marketing",   status: "Remote",   avatar: "KS", joined: "May 2021" },
  { id: 7, name: "Nour Khalil",  role: "UX Researcher",       department: "Design",      status: "Active",   avatar: "NK", joined: "Sep 2022" },
  { id: 8, name: "Jad Moussa",   role: "DevOps Engineer",     department: "Engineering", status: "Active",   avatar: "JM", joined: "Jan 2024" },
  { id: 9, name: "Dina Saab",    role: "Content Strategist",  department: "Marketing",   status: "Remote",   avatar: "DS", joined: "Jun 2021" },
  { id:10, name: "Fady Rizk",    role: "Data Engineer",       department: "Analytics",   status: "Active",   avatar: "FR", joined: "Mar 2023" },
];
