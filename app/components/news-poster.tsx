"use client";

import { useEffect, useState } from "react";

export default function NewsPoster({ search, title }: { search: string; title: string; }) {
  const [image, setImage] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ query: "query ($search: String) { Media(search: $search, type: ANIME) { coverImage { extraLarge large } } }", variables: { search } }),
      signal: controller.signal,
    }).then(r => r.ok ? r.json() : null).then(data => {
      const cover = data?.data?.Media?.coverImage;
      setImage(cover?.extraLarge || cover?.large || null);
    }).catch(() => {}).finally(() => setLoaded(true));
    return () => controller.abort();
  }, [search]);
  return <div className={"news-poster-shell" + (loaded ? " is-loaded" : "")}>
    {image ? <img src={image} alt={title + " poster"} loading="eager" fetchPriority="high" width="480" height="640" /> : <div className="poster-fallback">OTAKU<br/><span>✦</span></div>}
  </div>;
}
