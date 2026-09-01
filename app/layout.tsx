import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShadowPlay — Fortnite Live",
  description: "A modern Fortnite gaming hub powered by Epic's public Fortnite Data API.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
