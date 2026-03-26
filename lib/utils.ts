import { Employee } from "@/types";

export function filterEmployees(employees: Employee[], query: string): Employee[] {
  const q = query.toLowerCase().trim();
  if (!q) return employees;
  return employees.filter(
    (e) =>
      e.name.toLowerCase().includes(q) ||
      e.role.toLowerCase().includes(q) ||
      e.department.toLowerCase().includes(q) ||
      e.status.toLowerCase().includes(q)
  );
}
