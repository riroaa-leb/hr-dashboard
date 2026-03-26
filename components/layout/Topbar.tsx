"use client";

import { BellIcon, SearchIcon } from "@/components/ui/Icons";
import ThemeToggle from "@/components/ui/ThemeToggle";
import styles from "./Topbar.module.css";

interface TopbarProps {
  search: string;
  onSearchChange: (val: string) => void;
}

export default function Topbar({ search, onSearchChange }: TopbarProps) {
  return (
    <header className={styles.topbar}>
      <div className={styles.searchWrap}>
        <span className={styles.searchIcon}>
          <SearchIcon />
        </span>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search employees, roles, departments…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className={styles.actions}>
        <ThemeToggle />

        <button className={styles.iconBtn} aria-label="Notifications">
          <BellIcon />
          <span className={styles.notifDot} />
        </button>

        <button className={styles.addBtn}>
          + Add Employee
        </button>
      </div>
    </header>
  );
}
