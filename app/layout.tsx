// app/layout.tsx

import "./globals.css";

export const metadata = {
  title: "Growvelt Career Assistant",
  description:
    "AI-powered career tools for job seekers and employers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}