import Link from "next/link";
import { searchAnime } from "./lib/anilist";

const series = [
  { name: "ONE PIECE", sub: "Pirates, mysteries & the search for the ultimate treasure", label: "FEATURED", query: "One Piece", tone: "onepiece" },
  { name: "NARUTO", sub: "Ninja clans, rivalries & the path to becoming Hokage", label: "SHINOBI", query: "Naruto", tone: "naruto" },
  { name: "BLEACH", sub: "Soul Reapers, Bankai and battles across worlds", label: "SOUL REAPERS", query: "Bleach", tone: "bleach" },
  { name: "MORE ANIME", sub: "Discover your next series, from classics to new favourites", label: "DISCOVER", query: "Demon Slayer", tone: "more" },
];

export const dynamic = "force-dynamic";

export default async function Home() {
  const posters = await Promise.all(series.map((item) => searchAnime(item.query)));
  return <main className="site-shell">
    <div className="announcement">YOUR NEXT ANIME OBSESSION STARTS HERE <span>✦</span> NEWS · GUIDES · GEAR</div>
    <header className="nav">
      <Link className="brand" href="/">ANIME WORLD <span>✦</span><small>OTAKU CENTRAL</small></Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link className="active" href="/">Home</Link><Link href="/anime">Anime hub</Link><Link href="/news">News & guides</Link><Link href="/schedule">Schedule</Link><Link href="/merch">Merch picks</Link>
      </nav>
      <Link className="nav-cta" href="/schedule">Upcoming eps <span>↗</span></Link>
    </header>

    <section className="hero">
      <div className="hero-art" aria-hidden="true"><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/><div className="hero-sigil">漫</div><div className="hero-stamp">OTAKU<br/>CENTRAL</div></div>
      <div className="hero-copy">
        <div className="eyebrow"><i/> THE ANIME UNIVERSE, IN ONE PLACE</div>
        <h1>LIVE THE<br/><span>ANIME</span><br/>LIFE.</h1>
        <p>Your home for anime news, upcoming episodes, seasonal releases, character deep-dives, watch guides and merch worth checking out. From the Grand Line to the Soul Society — your next rabbit hole is waiting.</p>
        <div className="hero-actions"><Link className="button button-hot" href="/anime">Enter the anime hub <span>↗</span></Link><Link className="text-link" href="/schedule">Upcoming episodes <span>→</span></Link></div>
        <div className="hero-meta"><span><b>01</b> FAN FAVOURITES</span><span><b>02</b> RELEASE TRACKER</span><span><b>03</b> OTAKU FINDS</span></div>
      </div>
      <div className="hero-side-note">YOUR STORY<br/>STARTS HERE <span>✦</span></div>
    </section>

    <section className="section-block">
      <div className="section-heading"><div><span className="section-kicker">PICK YOUR UNIVERSE</span><h2>Enter the <em>worlds.</em></h2></div><Link href="/anime" className="view-link">ALL ANIME <span>↗</span></Link></div>
      <div className="series-grid">{series.map((s, i) => { const media = posters[i]; const image = media?.coverImage?.extraLarge || media?.coverImage?.large; return <Link href="/anime" className={`series-card ${s.tone}`} key={s.name}><div className="series-card-image">{image ? <img src={image} alt={s.name+" poster"} loading="lazy"/> : null}</div><div className="series-number">0{i + 1}</div><div className="series-content"><span className="series-label">{s.label}</span><h3>{s.name}</h3><p>{s.sub}</p><span className="card-arrow">↗</span></div></Link>;})}</div>
    </section>

    <section className="feature-band"><div className="feature-symbol">巻</div><div><span className="section-kicker">THE OTAKU BRIEFING</span><h2>Know the lore.<br/><em>Catch every detail.</em></h2><p>Clear explainers, arc guides and character breakdowns made for fans who want more than a quick recap.</p></div><Link className="button button-light" href="/news">Explore news & guides <span>↗</span></Link></section>

    <section className="section-block schedule-promo"><div><span className="section-kicker">NEVER MISS A RELEASE</span><h2>What’s airing <em>next?</em></h2><p>Browse upcoming episodes, season premieres and legal platform search links. Release times display in Nigeria’s West Africa Time.</p></div><Link className="button button-hot" href="/schedule">Open the schedule <span>↗</span></Link></section>

    <section className="section-block merch-preview"><div className="section-heading"><div><span className="section-kicker">THE OTAKU FINDS</span><h2>Gear up, <em>senpai.</em></h2></div><Link href="/merch" className="view-link">MERCH PICKS <span>↗</span></Link></div><div className="merch-callout"><div className="merch-art"><span>推し</span></div><div className="merch-copy"><span className="series-label">CURATED RECOMMENDATIONS</span><h3>Find your next favourite thing.</h3><p>Anime-inspired accessories, manga shelves, posters and collectibles. We’ll add verified shopping links as eligible affiliate programmes are approved.</p><Link className="button button-hot" href="/merch">Browse merch picks <span>↗</span></Link></div></div><p className="disclosure">Some future links may be affiliate links. We’ll clearly label them; recommendations never guarantee a discount or endorsement.</p></section>

    <footer className="footer"><Link className="brand footer-brand" href="/">ANIME WORLD <span>✦</span><small>OTAKU CENTRAL</small></Link><p>Made for fans. Built for discovery.</p><div><Link href="/anime">Anime hub</Link><Link href="/news">News & guides</Link><Link href="/schedule">Schedule</Link><Link href="/about">About</Link><Link href="/disclosure">Affiliate disclosure</Link><Link href="/merch">Merch picks</Link></div><small>Independent fan site. Not affiliated with any anime studios or rights holders.</small></footer>
  </main>;
}