import Sidebar from "@/src/components/layouts/sidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <Sidebar />

      <main className="min-h-screen md:ml-64">
        {children}
      </main>
    </div>
  );
}
