
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CalendarDays,
  ChartNoAxesCombined,
  Sparkles,
  Target,
} from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Build Better Habits",
    description:
      "Create meaningful habits and build routines that support your goals.",
  },
  {
    icon: CalendarDays,
    title: "Track Your Progress",
    description:
      "See your daily, weekly and monthly consistency in one place.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Understand Yourself",
    description:
      "Visualize your progress, discover patterns and celebrate improvements.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-violet-600 p-2 text-white">
            <Sparkles size={22} />
          </div>

          <span className="text-xl font-bold text-gray-900">
            LifeSync
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-violet-600"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
            <Sparkles size={16} />
            Your journey to a better you
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Small habits.
            <span className="block text-violet-600">
              Big changes.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-500">
            Create better routines, track your daily habits
            and become the person you want to be.
            One day at a time.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white hover:bg-violet-700"
            >
              Start Your Journey
              <ArrowRight size={19} />
            </Link>

            <Link
              href="/login"
              className="rounded-xl border border-gray-200 px-6 py-4 font-semibold text-gray-700 hover:bg-gray-50"
            >
              Login
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            ✨ Make every day count.
          </p>
        </div>

        {/* Dashboard preview */}
        {/* <div className="rounded-3xl border border-gray-100 bg-[#FAF9FF] p-6 shadow-xl shadow-violet-100/50 md:p-8">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Your dashboard</p>
              <h2 className="mt-1 text-xl font-bold text-gray-900">
                Today's Progress
              </h2>
            </div>

            <div className="rounded-xl bg-violet-100 p-3 text-violet-600">
              <Target size={23} />
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Daily score</p>
                <h3 className="mt-2 text-4xl font-bold text-gray-900">
                  75%
                </h3>
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-full border-[9px] border-violet-500 border-l-violet-100 text-sm font-bold text-violet-700">
                75%
              </div>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-3/4 rounded-full bg-violet-600" />
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {[
              ["🌅", "Wake up early", true],
              ["📚", "Read 10 pages", true],
              ["💻", "Learn development", true],
              ["🏋️", "Exercise", false],
            ].map(([emoji, name, done]) => (
              <div
                key={String(name)}
                className="flex items-center gap-3 rounded-xl bg-white p-4"
              >
                <span className="text-xl">{emoji}</span>

                <span className="flex-1 text-sm font-medium text-gray-700">
                  {name}
                </span>

                <CheckCircle2
                  size={20}
                  className={
                    done ? "text-violet-600" : "text-gray-200"
                  }
                />
              </div>
            ))}
          </div>

        </div> */}
      </section>

      {/* Features */}
      <section className="bg-[#FAF9FF] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-xl text-center">
            <p className="font-semibold text-violet-600">
              EVERYTHING IN ONE PLACE
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Make consistency your superpower.
            </h2>

            <p className="mt-4 text-gray-500">
              Everything you need to stay focused on your personal growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-100 bg-white p-8"
                >
                  <div className="mb-6 inline-flex rounded-xl bg-violet-100 p-3 text-violet-600">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-violet-600 px-8 py-16 text-center text-white">

          <h2 className="text-3xl font-bold md:text-4xl">
            Your better days start today.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-violet-100">
            Start tracking your habits and take the first step
            towards a more intentional life.
          </p>

          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-violet-700 hover:bg-violet-50"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-400">
        © 2026 LifeSync. Made for your growth. ✨
      </footer>

    </main>
  );
}
