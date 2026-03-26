import { DEPARTMENT_DATA, DEPT_COLORS } from "@/lib/constants";
import styles from "./DepartmentChart.module.css";

export default function DepartmentChart() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Headcount by Department</h2>
      <div className={styles.list}>
        {DEPARTMENT_DATA.map((d) => (
          <div key={d.name} className={styles.row}>
            <div className={styles.rowHeader}>
              <span className={styles.deptName}>{d.name}</span>
              <span className={styles.deptStats}>
                {d.count} · <strong>{d.pct}%</strong>
              </span>
            </div>
            <div className={styles.track}>
              <div
                className={styles.bar}
                style={{
                  width: `${d.pct}%`,
                  background: DEPT_COLORS[d.name] ?? "var(--color-primary)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
