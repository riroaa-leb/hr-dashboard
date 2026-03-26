"use client";

import { NAV_ITEMS } from "@/lib/constants";
import * as Icons from "@/components/ui/Icons";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  activeNav: string;
  onNavChange: (id: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  dashboard:   <Icons.HomeIcon />,
  employees:   <Icons.UsersIcon />,
  recruitment: <Icons.BriefcaseIcon />,
  payroll:     <Icons.CreditCardIcon />,
  reports:     <Icons.ChartIcon />,
  settings:    <Icons.SettingsIcon />,
};

export default function Sidebar({ activeNav, onNavChange }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <div className={styles.logoInner}>
          <div className={styles.logoMark}>
            <span className={styles.logoMarkLetter}>H</span>
          </div>
          <div>
            <div className={styles.logoName}>HRPulse</div>
            <div className={styles.logoSub}>People Operations</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.navSection}>Main Menu</div>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`${styles.navItem} ${activeNav === item.id ? styles.active : ""}`}
            onClick={() => onNavChange(item.id)}
          >
            <span className={styles.navIcon}>{ICON_MAP[item.id]}</span>
            {item.label}
            {item.badge && <span className={styles.navBadge}>{item.badge}</span>}
          </button>
        ))}
      </nav>

      {/* User */}
      <div className={styles.userCard}>
        <div className={styles.userInner}>
          <div className={styles.userAvatar}>LN</div>
          <div>
            <div className={styles.userName}>Lina Nassar</div>
            <div className={styles.userRole}>HR Manager</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
