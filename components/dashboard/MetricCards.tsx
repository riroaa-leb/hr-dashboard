import { METRICS } from "@/lib/constants";
import styles from "./MetricCards.module.css";

export default function MetricCards() {
  return (
    <div className={styles.grid}>
      {METRICS.map((m) => (
        <div key={m.label} className={styles.card}>
          <div>
            <p className={styles.label}>{m.label}</p>
            <p className={styles.value}>{m.value}</p>
            <p className={`${styles.delta} ${m.positive ? styles.positive : styles.warning}`}>
              {m.delta}
            </p>
          </div>
          <span className={styles.emoji}>{m.icon}</span>
        </div>
      ))}
    </div>
  );
}
