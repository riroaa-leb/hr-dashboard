import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "HRPulse – People Operations Dashboard",
  description: "Modern HR dashboard for managing employees, recruitment, payroll and reports.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var saved = localStorage.getItem('hr-theme');
              var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var theme = saved || (prefersDark ? 'dark' : 'light');
              document.documentElement.setAttribute('data-theme', theme);
            } catch(e) {}
          })();
        `}} />
      </head>
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
