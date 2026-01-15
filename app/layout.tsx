import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strategy Fundamentals | Rules-Based Stock Trade Ideas",
  description:
    "Strategy Fundamentals delivers rules-based stock trade ideas with a dashboard, push notifications, and historical backtests for educational purposes.",
  openGraph: {
    title: "Strategy Fundamentals",
    description:
      "Rules-based stock trade ideas delivered to your dashboard with push alerts. Educational, transparent, and backtest-driven.",
    url: "https://www.strategyfundamentals.com",
    siteName: "Strategy Fundamentals",
    type: "website"
  },
  metadataBase: new URL("https://www.strategyfundamentals.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
