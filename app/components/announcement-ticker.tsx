"use client";

import { useEffect, useState } from "react";

const messages = [
  "YOUR NEXT ANIME OBSESSION STARTS HERE",
  "NEW SEASON · NEW EPISODES · NEW WORLDS",
  "TRAILERS · RELEASE DATES · WATCH GUIDES",
  "FIND YOUR NEXT FAVOURITE ANIME",
];

export default function AnnouncementTicker({ initial = "YOUR NEXT ANIME OBSESSION STARTS HERE", suffix = "NEWS · GUIDES · GEAR" }: { initial?: string; suffix?: string }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setIndex(value => (value + 1) % messages.length), 3200);
    return () => window.clearInterval(timer);
  }, []);
  return <div className="announcement announcement-rotating" aria-live="polite"><span className="ticker-message" key={index}>{index === 0 ? initial : messages[index]}</span><b aria-hidden="true">✦</b><span className="ticker-suffix">{suffix}</span></div>;
}
