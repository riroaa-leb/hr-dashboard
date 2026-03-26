# HRPulse – HR Dashboard

A modern, production-ready HR dashboard built with **Next.js 14**, **TypeScript**, and **CSS Modules**.

## Features

- 📊 KPI metric cards (headcount, open roles, tenure, retention)
- 🏢 Headcount breakdown by department with animated bars
- 🔔 Real-time activity feed
- 👥 Searchable employee directory with status badges
- 🧭 Sidebar navigation with active states
- 🎨 Full design token system via CSS custom properties
- 📱 Responsive layout (mobile → desktop)

## Project Structure

```
hr-dashboard/
├── app/
│   ├── layout.tsx          # Root layout + font import
│   ├── page.tsx            # Main dashboard page (client)
│   └── page.module.css     # Page-level layout styles
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx / .module.css
│   │   └── Topbar.tsx  / .module.css
│   └── dashboard/
│   │   ├── MetricCards.tsx   / .module.css
│   │   ├── DepartmentChart.tsx / .module.css
│   │   ├── ActivityFeed.tsx  / .module.css
│   │   └── EmployeeTable.tsx / .module.css
│   └── ui/
│       ├── Avatar.tsx    / .module.css
│       ├── StatusBadge.tsx / .module.css
│       └── Icons.tsx
├── lib/
│   ├── constants.ts        # All mock data + design constants
│   └── utils.ts            # Filter/search helpers
├── styles/
│   └── globals.css         # Design tokens (CSS vars) + reset
├── types/
│   └── index.ts            # TypeScript interfaces
├── next.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## Design Tokens

All design values live in `styles/globals.css` as CSS custom properties:

| Token             | Value                          |
| ----------------- | ------------------------------ |
| `--color-primary` | `#781423` (a7mareeka)          |
| `--color-success` | `#10b981` (emerald ya habeebi) |
| `--color-warning` | `#f59e0b` (amber)              |
| `--color-danger`  | `#ef4444` (red)                |
| `--sidebar-width` | `240px`                        |
| `--topbar-height` | `64px`                         |

## Extending

- **Add a new page**: Create `app/employees/page.tsx` and link it from the sidebar
- **Add real data**: Replace `lib/constants.ts` exports with API fetch calls
- **Add a chart library**: Drop in `recharts` or `chart.js` in `DepartmentChart.tsx`
