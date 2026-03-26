import { RECENT_ACTIVITY } from "@/lib/constants";
import styles from "./ActivityFeed.module.css";

export default function ActivityFeed() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Recent Activity</h2>
      <div className={styles.list}>
        {RECENT_ACTIVITY.map((a, i) => (
          <div key={i} className={styles.item}>
            <span className={`${styles.dot} ${styles[a.type as keyof typeof styles]}`} />
            <div>
              <p className={styles.text}>{a.text}</p>
              <p className={styles.time}>{a.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
