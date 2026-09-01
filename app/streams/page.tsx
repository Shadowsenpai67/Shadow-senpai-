"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Stream = { id: string; userName: string; title: string; gameName: string; viewerCount: number; thumbnail?: string; profileImage?: string; startedAt?: string; tags?: string[]; isLive?: boolean };

const categories = ["All", "Fortnite", "Zero Build", "Ranked", "Creative"];
const fallback = [
  { userName: "Fortnite", title: "Fortnite official channel", gameName: "Fortnite", viewerCount: 0 },
  { userName: "SypherPK", title: "Fortnite creator stream", gameName: "Fortnite", viewerCount: 0 },
  { userName: "NickEh30", title: "Fortnite creator stream", gameName: "Fortnite", viewerCount: 0 },
];

const compact = (n: number) => new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(n);

export default function StreamsPage() {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function load(q = "") {
    setLoading(true);
    try {
      const res = await fetch(`/api/streams?limit=18${q ? `&q=${encodeURIComponent(q)}` : ""}`, { cache: "no-store" });
      const data = await res.json();
      setStreams(data.streams || []);
      setMessage(data.message || "");
    } catch {
      setMessage("Live discovery is temporarily unavailable.");
      setStreams([]);
    } finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);

  const filtered = useMemo(() => {
    if (category === "All" || category === "Fortnite") return streams;
    const wanted = category.toLowerCase();
    return streams.filter(s => `${s.title} ${(s.tags || []).join(" ")}`.toLowerCase().includes(wanted));
  }, [streams, category]);

  return <main className="platform-shell">
    <nav className="nav"><Link className="brand" href="/">SHADOW<span>PLAY</span></Link><div className="links"><Link href="/">Home</Link><Link className="active-link" href="/streams">Live</Link><Link href="/#discover">Discover</Link><Link href="/#stats">Stats</Link></div><Link className="btn secondary" href="/watch?channel=fortnite">Watch</Link></nav>
    <section className="streams-hero">
      <div><div className="eyebrow"><i className="dot"/> Live discovery</div><h1>Find your next<br/><span className="gradient">LIVE DROP.</span></h1><p>Browse Fortnite creators, sort through live broadcasts, and jump straight into the action.</p></div>
      <div className="live-summary"><span className="pulse">●</span><div><strong>{streams.length ? `${streams.length} live channels found` : "Fortnite Live"}</strong><small>Updated automatically from Twitch</small></div></div>
    </section>
    <section className="stream-controls">
      <div className="chips">{categories.map(c => <button className={category === c ? "chip selected" : "chip"} onClick={() => setCategory(c)} key={c}>{c}</button>)}</div>
      <form className="stream-search" onSubmit={e => { e.preventDefault(); load(query); }}><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search a live creator..."/><button>Search</button></form>
    </section>
    {message && <div className="api-banner">{message}{message.includes("TWITCH_CLIENT") && <span> Add your Twitch app credentials in Vercel.</span>}</div>}
    <section className="stream-list-section">
      <div className="section-title"><div><h2>{category === "All" ? "Live right now" : `${category} streams`}</h2><p>Live Fortnite broadcasts and creator channels.</p></div><button className="refresh" onClick={() => load(query)}>↻ Refresh</button></div>
      <div className="live-grid">
        {loading ? Array.from({length: 6}).map((_, i) => <div className="stream-skeleton" key={i}/>) : filtered.length ? filtered.map(s => <Link href={`/watch?channel=${encodeURIComponent(s.userName)}`} className="live-card" key={s.id}>
          <div className="thumb">{s.thumbnail ? <img src={s.thumbnail} alt=""/> : <div className="thumb-fallback">🎮</div>}<span className="live-badge">● LIVE</span><span className="viewer-badge">👁 {compact(s.viewerCount)}</span></div>
          <div className="live-meta">{s.profileImage ? <img className="avatar" src={s.profileImage} alt=""/> : <div className="avatar">{s.userName[0]}</div>}<div className="live-copy"><h3>{s.title}</h3><strong>{s.userName}</strong><p>{s.gameName} · {compact(s.viewerCount)} viewers</p></div></div>
        </Link>) : <div className="empty"><div>📡</div><h3>No live channels found</h3><p>{message || "Try another search or refresh the feed."}</p></div>}
      </div>
    </section>
    <footer className="footer"><span>© 2026 ShadowPlay</span><span>Live video is provided by Twitch.</span></footer>
  </main>;
}
