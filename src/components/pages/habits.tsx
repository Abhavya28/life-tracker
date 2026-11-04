
import { Plus, Search, MoreVertical } from "lucide-react";

const habits = [
  { name: "Morning Exercise", emoji: "🏋️", category: "Health", color: "bg-orange-100" },
  { name: "Read Books", emoji: "📚", category: "Learning", color: "bg-purple-100" },
  { name: "Drink Water", emoji: "💧", category: "Health", color: "bg-blue-100" },
  { name: "Meditation", emoji: "🧘", category: "Mindfulness", color: "bg-green-100" },
];

export default function HabitsPage() {
  return (
    <div className="mx-auto max-w-7xl p-6 md:p-10">

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            My Habits
          </h1>
          <p className="mt-2 text-gray-500">
            Build better routines, one habit at a time.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white">
          <Plus size={18} />
          Create Habit
        </button>
      </div>

      <div className="mb-6 flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
        <Search size={19} className="text-gray-400" />
        <input
          placeholder="Search habits..."
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {habits.map((habit) => (
          <div
            key={habit.name}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${habit.color}`}>
                {habit.emoji}
              </div>

              <button aria-label="Habit options">
                <MoreVertical size={20} className="text-gray-400" />
              </button>
            </div>

            <h3 className="font-semibold text-gray-900">
              {habit.name}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {habit.category}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
