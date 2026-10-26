import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anime World: Otaku Central",
  description: "Your home for anime news, character explainers, watch guides and curated anime-inspired merchandise recommendations.",
  metadataBase: new URL("https://anime-world-otaku-central.vercel.app"),
  openGraph: {
    title: "Anime World: Otaku Central",
    description: "Live the anime life. News, guides, lore and otaku finds.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}