"use client";

import { useState } from "react";
import type { AnimeMedia } from "../lib/anilist";

type Entry = { title: string; query: string; tag: string; text: string; media: AnimeMedia | null };

const providers = (title: string) => [
  { label: "Crunchyroll", href: "https://www.crunchyroll.com/search?q=" + encodeURIComponent(title) },
  { label: "Netflix", href: "https://www.netflix.com/search?q=" + encodeURIComponent(title) },
  { label: "Prime Video", href: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=" + encodeURIComponent(title) },
  { label: "YouTube", href: "https://www.youtube.com/results?search_query=" + encodeURIComponent(title + " official trailer") },
];

export default function AnimeBrowser({ entries }: { entries: Entry[] }) {
  const [showMore, setShowMore] = useState(false);
  const visible = showMore ? entries : entries.slice(0, 4);
  return <>
    <div className="anime-browser-grid">
      {visible.map((entry, i) => {
        const title = entry.media?.title?.english || entry.media?.title?.romaji || entry.title;
        const image = entry.media?.coverImage?.extraLarge || entry.media?.coverImage?.large;
        return <article className="anime-browser-card" key={entry.title}>
          <a className="anime-browser-poster" href={providers(title)[3].href} target="_blank" rel="noopener noreferrer" aria-label={"Find " + title + " official trailer on YouTube"}>
            {image ? <img src={image} alt={title + " poster"} loading={i < 4 ? "eager" : "lazy"} fetchPriority={i < 2 ? "high" : "auto"} /> : <div className="poster-fallback">ANIME<br/><span>✦</span></div>}
            <span className="trailer-overlay">▶ WATCH TRAILER</span>
          </a>
          <div className="anime-browser-copy">
            <span className="pill">{entry.tag}</span><h3>{title}</h3><p>{entry.text}</p>
            <a className="trailer-link" href={providers(title)[3].href} target="_blank" rel="noopener noreferrer">▶ Find trailer ↗</a>
            <div className="watch-links">{providers(title).slice(0, 3).map(p => <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer">{p.label}</a>)}</div>
          </div>
        </article>;
      })}
    </div>
    <div className="more-anime-control">
      <button type="button" className="button button-hot" onClick={() => setShowMore(v => !v)} aria-expanded={showMore}>{showMore ? "Show fewer anime" : "See more anime"} <span>{showMore ? "↑" : "↓"}</span></button>
      <p>{showMore ? "You’re seeing the full anime list." : "Tap to reveal more series, trailers and legal watch-platform searches."}</p>
    </div>
  </>;
}
