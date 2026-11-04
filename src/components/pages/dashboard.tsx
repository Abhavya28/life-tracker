
import {
  Flame,
  CheckCircle2,
  Target,
  TrendingUp,
  Plus,
} from "lucide-react";

const stats = [
  {
    title: "Today's Progress",
    value: "75%",
    description: "3 of 4 habits completed",
    icon: Target,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    title: "Current Streak",
    value: "7 Days",
    description: "Keep going!",
    icon: Flame,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Completed Habits",
    value: "24",
    description: "This month",
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Weekly Average",
    value: "78%",
    description: "Great consistency!",
    icon: TrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

const habits = [
  { name: "Wake up at 7 AM", emoji: "🌅", done: true },
  { name: "Read 10 pages", emoji: "📚", done: true },
  { name: "Exercise for 30 mins", emoji: "🏋️", done: true },
  { name: "Learn something new", emoji: "💻", done: false },
];

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl p-6 md:p-10">

      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-sm text-gray-500">
            Your personal space
          </p>

          <h1 className="text-3xl font-bold text-gray-900">
            Good morning! 👋
          </h1>

          <p className="mt-2 text-gray-500">
            Small steps every day lead to big changes.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700">
          <Plus size={18} />
          Add Habit
        </button>
      </div>

      {/* Statistics cards */}
      <div className="mb-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <div className={`rounded-xl p-3 ${stat.bg}`}>
                  <Icon size={20} className={stat.color} />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                {stat.value}
              </h2>

              <p className="mt-2 text-xs text-gray-400">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Habits and progress */}
      <div className="grid gap-6 xl:grid-cols-3">

        <div className="rounded-2xl border border-gray-100 bg-white p-6 xl:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Today's Habits
              </h2>
              <p className="mt-1 text-sm text-gray-400">
                Keep showing up for yourself.
              </p>
            </div>

            <span className="rounded-lg bg-violet-50 px-3 py-2 text-sm font-semibold text-violet-600">
              3 / 4 Done
            </span>
          </div>

          <div className="space-y-3">
            {habits.map((habit) => (
              <div
                key={habit.name}
                className="flex items-center gap-4 rounded-xl border border-gray-100 p-4"
              >
                <span className="text-2xl">
                  {habit.emoji}
                </span>

                <p className={`flex-1 font-medium ${
                  habit.done
                    ? "text-gray-400 line-through"
                    : "text-gray-800"
                }`}>
                  {habit.name}
                </p>

                <CheckCircle2
                  size={22}
                  className={
                    habit.done
                      ? "text-violet-600"
                      : "text-gray-300"
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900">
            Daily Goal
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Your progress today
          </p>

          <div className="flex justify-center py-10">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border-[12px] border-violet-100 relative">
              <div className="absolute inset-[-12px] rounded-full border-[12px] border-transparent border-t-violet-600 border-r-violet-600 rotate-45" />

              <div className="text-center">
                <p className="text-4xl font-bold">75%</p>
                <p className="text-xs text-gray-400">
                  Completed
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-violet-50 p-4">
            <p className="font-semibold text-violet-800">
              You're doing great! ✨
            </p>
            <p className="mt-1 text-sm text-violet-600">
              One more habit to reach your daily goal.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
