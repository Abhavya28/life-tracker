

"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function CalendarPage() {
  const [month, setMonth] = useState(new Date());

  const year = month.getFullYear();
  const monthIndex = month.getMonth();

  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  const offset = (firstDay + 6) % 7;

  const changeMonth = (direction: number) => {
    setMonth(
      new Date(year, monthIndex + direction, 1)
    );
  };

  return (
    <div className="mx-auto max-w-7xl p-6 md:p-10">

      <h1 className="text-3xl font-bold text-gray-900">
        Calendar
      </h1>

      <p className="mt-2 mb-8 text-gray-500">
        Track your consistency over time.
      </p>

      <div className="rounded-2xl border border-gray-100 bg-white p-6">

        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => changeMonth(-1)}
            aria-label="Previous month"
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>

          <h2 className="text-lg font-bold">
            {month.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h2>

          <button
            onClick={() => changeMonth(1)}
            aria-label="Next month"
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
            (day) => (
              <div
                key={day}
                className="py-3 text-center text-xs font-semibold text-gray-400"
              >
                {day}
              </div>
            )
          )}

          {Array.from({ length: offset }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const today =
              new Date().getDate() === day &&
              new Date().getMonth() === monthIndex &&
              new Date().getFullYear() === year;

            return (
              <div
                key={day}
                className={`flex aspect-square items-center justify-center rounded-xl text-sm ${
                  today
                    ? "bg-violet-600 font-bold text-white"
                    : "bg-gray-50 text-gray-700 hover:bg-violet-50"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Habit completion heatmap will be connected to your
          tracking data in the next phase.
        </p>
      </div>
    </div>
  );
}
