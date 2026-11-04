
export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl p-6 md:p-10">

      <h1 className="text-3xl font-bold text-gray-900">
        Settings
      </h1>

      <p className="mt-2 mb-8 text-gray-500">
        Manage your account and preferences.
      </p>

      <div className="space-y-5">

        <section className="rounded-2xl border border-gray-100 bg-white p-6">
          <h2 className="mb-5 text-lg font-semibold">
            Profile Information
          </h2>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-gray-500">
                Full Name
              </label>
              <input
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-500">
                Email Address
              </label>
              <input
                placeholder="Your email"
                type="email"
                className="w-full rounded-xl border border-gray-200 p-3 outline-none focus:border-violet-500"
              />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-100 bg-white p-6">
          <h2 className="mb-3 text-lg font-semibold">
            Preferences
          </h2>

          <p className="text-sm text-gray-500">
            Theme, notifications and reminder preferences
            will be available here.
          </p>
        </section>

      </div>
    </div>
  );
}
