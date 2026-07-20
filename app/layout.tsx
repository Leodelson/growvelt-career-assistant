import "./globals.css";
import Navbar from "./career-assistant/components/Navbar";
import Footer from "./career-assistant/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growvelt Career Assistant",
  description: "AI-powered career tools.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
  <div className="flex min-h-screen flex-col">
    <Navbar />

    <main className="flex-1">
      {children}
    </main>

    <Footer />
  </div>
</body>
    </html>
  );
}