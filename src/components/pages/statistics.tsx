
import {
  TrendingUp,
  Flame,
  Target,
  Award,
} from "lucide-react";

const statistics = [
  {
    title: "Daily Score",
    value: "85%",
    icon: Target,
  },
  {
    title: "Weekly Score",
    value: "78%",
    icon: TrendingUp,
  },
  {
    title: "Monthly Score",
    value: "82%",
    icon: Award,
  },
  {
    title: "Longest Streak",
    value: "14 Days",
    icon: Flame,
  },
];

export default function StatisticsPage() {
  return (
    <div className="mx-auto max-w-7xl p-6 md:p-10">

      <h1 className="text-3xl font-bold text-gray-900">
        Statistics
      </h1>

      <p className="mt-2 mb-8 text-gray-500">
        Understand your progress and celebrate consistency.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statistics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <Icon className="mb-5 text-violet-600" size={24} />

              <p className="text-sm text-gray-500">
                {item.title}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                {item.value}
              </h2>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6">
        <h2 className="text-lg font-bold text-gray-900">
          Your Consistency
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Detailed performance charts will appear here once
          habit tracking is connected.
        </p>
      </div>

    </div>
  );
}
