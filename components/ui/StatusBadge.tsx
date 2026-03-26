import { Employee } from "@/types";
import styles from "./StatusBadge.module.css";

interface Props {
  status: Employee["status"];
}

const CLASS_MAP: Record<Employee["status"], string> = {
  Active:    styles.active,
  Remote:    styles.remote,
  "On Leave": styles.onLeave,
};

export default function StatusBadge({ status }: Props) {
  return (
    <span className={`${styles.badge} ${CLASS_MAP[status]}`}>
      <span className={styles.dot} />
      {status}
    </span>
  );
}
