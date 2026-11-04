
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  ChartNoAxesCombined,
  Settings,
  Sparkles,
  LogOut,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    href: "/user/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Habits",
    href: "/user/habits",
    icon: CheckSquare,
  },
  {
    name: "Calendar",
    href: "/user/calendar",
    icon: CalendarDays,
  },
  {
    name: "Statistics",
    href: "/user/statistics",
    icon: ChartNoAxesCombined,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-gray-100 bg-white p-6 md:flex">

      {/* Logo */}
      <Link
        href="/user/dashboard"
        className="mb-12 flex items-center gap-3"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
          <Sparkles size={21} />
        </div>

        <span className="text-xl font-bold text-gray-900">
          LifeSync
        </span>
      </Link>

      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Menu
      </p>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                active
                  ? "bg-violet-50 text-violet-700"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon size={19} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom navigation */}
      <div className="border-t border-gray-100 pt-5">
        <Link
          href="/user/settings"
          className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${
            pathname === "/user/settings"
              ? "bg-violet-50 text-violet-700"
              : "text-gray-500 hover:bg-gray-50"
          }`}
        >
          <Settings size={19} />
          Settings
        </Link>

        <Link
          href="/login"
          className="mt-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-500 hover:bg-gray-50"
        >
          <LogOut size={19} />
          Logout
        </Link>
      </div>
    </aside>
  );
}
