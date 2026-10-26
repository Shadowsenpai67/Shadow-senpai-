"use client";

import { useEffect, useState } from "react";

type Trailer = { id?: string | null; site?: string | null; thumbnail?: string | null };
function trailerHref(title: string, trailer: Trailer | null) {
  if (trailer?.id && trailer.site?.toLowerCase() === "youtube") return "https://www.youtube.com/watch?v=" + encodeURIComponent(trailer.id) + "&autoplay=1";
  if (trailer?.id && trailer.site?.toLowerCase() === "dailymotion") return "https://www.dailymotion.com/video/" + encodeURIComponent(trailer.id) + "?autoplay=1";
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(title + " official anime trailer");
}

export default function NewsPoster({ search, title }: { search: string; title: string; }) {
  const [image, setImage] = useState<string | null>(null);
  const [trailer, setTrailer] = useState<Trailer | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ query: "query ($search: String) { Media(search: $search, type: ANIME) { coverImage { extraLarge large } trailer { id site thumbnail } } }", variables: { search } }),
      signal: controller.signal,
    }).then(r => r.ok ? r.json() : null).then(data => {
      const media = data?.data?.Media;
      const cover = media?.coverImage;
      setImage(cover?.extraLarge || cover?.large || null);
      setTrailer(media?.trailer || null);
    }).catch(() => {}).finally(() => setLoaded(true));
    return () => controller.abort();
  }, [search]);
  return <div className={"news-poster-shell" + (loaded ? " is-loaded" : "")}>
    {image ? <img src={image} alt={title + " poster"} loading="eager" fetchPriority="high" width="480" height="640" /> : <div className="poster-fallback">OTAKU<br/><span>✦</span></div>}
    <a className="news-poster-play" href={trailerHref(title, trailer)} target="_blank" rel="noopener noreferrer" aria-label={"Play " + title + " trailer"}>▶ WATCH TRAILER</a>
  </div>;
}
