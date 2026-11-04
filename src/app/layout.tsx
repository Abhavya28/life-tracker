
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LifeSync - Build Better Habits",
  description:
    "Track your habits, measure your progress and build a better life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
