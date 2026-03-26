"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import MetricCards from "@/components/dashboard/MetricCards";
import DepartmentChart from "@/components/dashboard/DepartmentChart";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import EmployeeTable from "@/components/dashboard/EmployeeTable";
import { EMPLOYEES } from "@/lib/constants";
import { filterEmployees } from "@/lib/utils";
import styles from "./page.module.css";

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [search, setSearch] = useState("");

  const filtered = filterEmployees(EMPLOYEES, search);

  return (
    <div className={styles.shell}>
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />

      <div className={styles.main}>
        <Topbar search={search} onSearchChange={setSearch} />

        <main className={styles.content}>
          {/* Page heading */}
          <div className={styles.pageHead}>
            <h1 className={styles.pageTitle}>HR Dashboard</h1>
            <p className={styles.pageSubtitle}>
              Welcome back, Lina — here&apos;s what&apos;s happening today.
            </p>
          </div>

          {/* KPI cards */}
          <MetricCards />

          {/* Department breakdown + activity */}
          <div className={styles.midRow}>
            <DepartmentChart />
            <ActivityFeed />
          </div>

          {/* Employee directory */}
          <EmployeeTable employees={filtered} />
        </main>
      </div>
    </div>
  );
}
