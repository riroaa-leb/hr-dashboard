import { Employee } from "@/types";
import Avatar from "@/components/ui/Avatar";
import StatusBadge from "@/components/ui/StatusBadge";
import styles from "./EmployeeTable.module.css";

interface Props {
  employees: Employee[];
}

const COLUMNS = ["Name", "Role", "Department", "Status", "Joined", ""];

export default function EmployeeTable({ employees }: Props) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>Employee Directory</h2>
        <span className={styles.count}>{employees.length} employees</span>
      </div>

      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              {COLUMNS.map((col) => (
                <th key={col} className={styles.th}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan={6} className={styles.empty}>
                  No employees match your search.
                </td>
              </tr>
            ) : (
              employees.map((emp, i) => (
                <tr key={emp.id} className={styles.tr}>
                  <td className={styles.td}>
                    <div className={styles.nameCell}>
                      <Avatar initials={emp.avatar} index={i} />
                      <span className={styles.name}>{emp.name}</span>
                    </div>
                  </td>
                  <td className={styles.td}>
                    <span className={styles.role}>{emp.role}</span>
                  </td>
                  <td className={styles.td}>
                    <span className={styles.deptPill}>{emp.department}</span>
                  </td>
                  <td className={styles.td}>
                    <StatusBadge status={emp.status} />
                  </td>
                  <td className={styles.td}>
                    <span className={styles.joined}>{emp.joined}</span>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.viewBtn}>View</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
