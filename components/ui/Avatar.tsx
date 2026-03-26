import { AVATAR_COLORS } from "@/lib/constants";
import styles from "./Avatar.module.css";

interface Props {
  initials: string;
  index: number;
}

export default function Avatar({ initials, index }: Props) {
  return (
    <div
      className={styles.avatar}
      style={{ background: AVATAR_COLORS[index % AVATAR_COLORS.length] }}
    >
      {initials}
    </div>
  );
}
