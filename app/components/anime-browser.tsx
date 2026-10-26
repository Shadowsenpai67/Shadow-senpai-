"use client";

import { useEffect, useState } from "react";
import type { AnimeMedia } from "../lib/anilist";

type Entry = { title: string; query: string; tag: string; text: string; media: AnimeMedia | null };
const providers = (title: string) => [
  { label: "Crunchyroll", href: "https://www.crunchyroll.com/search?q=" + encodeURIComponent(title) },
  { label: "Netflix", href: "https://www.netflix.com/search?q=" + encodeURIComponent(title) },
  { label: "Prime Video", href: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=" + encodeURIComponent(title) },
];
function trailerHref(title: string, media: AnimeMedia | null) {
  const trailer = media?.trailer;
  if (trailer?.id && trailer.site?.toLowerCase() === "youtube") return "https://www.youtube.com/watch?v=" + encodeURIComponent(trailer.id) + "&autoplay=1";
  if (trailer?.id && trailer.site?.toLowerCase() === "dailymotion") return "https://www.dailymotion.com/video/" + encodeURIComponent(trailer.id) + "?autoplay=1";
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(title + " official anime trailer");
}

export default function AnimeBrowser({ entries, selectedTitle = "" }: { entries: Entry[]; selectedTitle?: string }) {
  const [showMore, setShowMore] = useState(!selectedTitle);
  const selected = entries.find(entry => entry.query.toLowerCase() === selectedTitle.toLowerCase() || entry.title.toLowerCase() === selectedTitle.toLowerCase());
  useEffect(() => {
    setShowMore(!selectedTitle);
  }, [selectedTitle]);
  const visible = selectedTitle ? (selected ? [selected] : []) : showMore ? entries : entries.slice(0, 4);
  return <>
    {selectedTitle && selected && <div className="selected-anime-bar"><span>NOW VIEWING: <strong>{selected.title}</strong></span></div> }
    <div className="anime-browser-grid">
      {visible.map((entry, i) => {
        const title = entry.media?.title?.english || entry.media?.title?.romaji || entry.title;
        const image = entry.media?.coverImage?.extraLarge || entry.media?.coverImage?.large;
        const trailer = trailerHref(title, entry.media);
        return <article className="anime-browser-card" key={entry.title}>
          <a className="anime-browser-poster" href={"/anime?title=" + encodeURIComponent(entry.query)} aria-label={"View only " + title + " in Anime Hub"}>
            {image ? <img src={image} alt={title + " poster"} loading={i < 4 ? "eager" : "lazy"} fetchPriority={i < 2 ? "high" : "auto"} /> : <div className="poster-fallback">ANIME<br/><span>✦</span></div>}
            <span className="trailer-overlay">VIEW THIS ANIME</span>
          </a>
          <div className="anime-browser-copy">
            <span className="pill">{entry.tag}</span><a className="anime-title-link" href={"/anime?title=" + encodeURIComponent(entry.query)}><h3>{title}</h3></a><p>{entry.text}</p>
            <a className="trailer-link" href={trailer} target="_blank" rel="noopener noreferrer">▶ Watch trailer ↗</a>
            <div className="watch-links">{providers(title).map(p => <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer">{p.label}</a>)}</div>
          </div>
        </article>;
      })}
    </div>
    {!selected && <div className="more-anime-control">
      <button type="button" className="button button-hot" onClick={() => setShowMore(v => !v)} aria-expanded={showMore}>{showMore ? "Show fewer anime" : "See more anime"} <span>{showMore ? "↑" : "↓"}</span></button>
      <p>{showMore ? "You’re seeing the full anime list." : "Tap to reveal more series, trailers and legal watch-platform searches."}</p>
    </div>}

  </>;
}
