import Link from "next/link";

type Island = { id?: string; name?: string; description?: string; metrics?: { plays?: number; uniquePlayers?: number; peakCCU?: number } };

async function getIslands(): Promise<Island[]> {
  try {
    const res = await fetch("https://api.fortnite.com/ecosystem/v1/islands", { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data.slice(0, 8) : data?.islands?.slice(0, 8) ?? [];
  } catch { return []; }
}

function number(value?: number) { return typeof value === "number" ? new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value) : "—"; }

export default async function Home() {
  const islands = await getIslands();
  return <main className="shell">
    <nav className="nav"><Link className="brand" href="/">SHADOW<span>PLAY</span></Link><div className="links"><Link href="#discover">Discover</Link><Link href="#streams">Live Streams</Link><Link href="#stats">Stats</Link></div><Link className="btn secondary" href="/watch?channel=fortnite">Watch Fortnite</Link></nav>
    <section className="hero">
      <div><div className="eyebrow"><i className="dot"/> Fortnite data, live streams & discovery</div><h1>DROP IN.<br/><span className="gradient">WATCH MORE.</span></h1><p>A fast, modern Fortnite hub built around Epic's public Fortnite Data API. Discover popular islands, see real engagement metrics, and jump into Fortnite streams.</p><div className="actions"><Link className="btn primary" href="/watch?channel=fortnite">▶ Watch Live</Link><Link className="btn secondary" href="#discover">Explore Islands ↓</Link></div></div>
      <div className="hero-card"><div className="live-head"><strong>FORTNITE LIVE</strong><span className="live">● LIVE HUB</span></div><div className="screen"><div className="play">▶</div></div><p style={{color:"#9299aa",fontSize:12,marginBottom:0}}>Open a live Twitch player or browse the latest Fortnite streams.</p></div>
    </section>
    <section className="section" id="discover"><div className="section-title"><div><h2>Discover Fortnite</h2><p>Live island performance data from Epic's public API.</p></div></div><div className="grid">{islands.length ? islands.map((island, i) => <article className="card" key={island.id ?? i}><div className="card-icon">🎮</div><h3>{island.name ?? `Fortnite Island ${i+1}`}</h3><p>{island.description ?? "Public Fortnite island"}</p><div className="stat">{number(island.metrics?.peakCCU)} <span style={{fontSize:11,color:"#9299aa",fontWeight:600}}>peak CCU</span></div></article>) : ["Battle Royale","Zero Build","Reload","Epic Experiences"].map(x => <article className="card" key={x}><div className="card-icon">⚡</div><h3>{x}</h3><p>Epic island data will appear here when the public Data API returns discoverable island results.</p></article>)}</div></section>
    <section className="section" id="streams"><div className="section-title"><div><h2>Watch Fortnite</h2><p>Open live creator streams without leaving the gaming hub.</p></div></div><div className="stream-grid">{["fortnite","sypherpk","nickeh30"].map((channel, i) => <Link className="stream" href={`/watch?channel=${channel}`} key={channel}><div className="stream-top"><span>🎥</span><span className="tag">LIVE PLAYER</span></div><h3>{["Fortnite","SypherPK","Nick Eh 30"][i]}</h3><p>Watch this Fortnite channel on ShadowPlay.</p></Link>)}</div></section>
    <section className="section" id="stats"><div className="section-title"><div><h2>Real data, not placeholders</h2><p>Epic says its Fortnite Data API is publicly accessible and does not require authentication.</p></div></div><div className="grid"><article className="card"><div className="card-icon">📈</div><h3>Peak CCU</h3><p>Peak concurrent players for discoverable islands.</p></article><article className="card"><div className="card-icon">👥</div><h3>Unique Players</h3><p>Distinct players represented by aggregated island metrics.</p></article><article className="card"><div className="card-icon">🎯</div><h3>Plays</h3><p>Game sessions recorded by the Fortnite Data API.</p></article><article className="card"><div className="card-icon">⭐</div><h3>Favorites</h3><p>How often players favorite an island.</p></article></div></section>
    <footer className="footer"><span>© 2026 ShadowPlay</span><span>Fortnite is a trademark of Epic Games, Inc.</span></footer>
  </main>;
}
