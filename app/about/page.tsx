import Link from "next/link";

export default function AboutPage() {
  return <main className="site-shell">
    <div className="announcement">ANIME FANS, ALWAYS WELCOME <span>✦</span> OTaku CENTRAL</div>
    <header className="nav">
      <Link className="brand" href="/">ANIME WORLD <span>✦</span><small>OTAKU CENTRAL</small></Link>
      <nav className="nav-links" aria-label="Main navigation"><Link href="/">Home</Link><Link href="/anime">Anime hub</Link><Link href="/news">News & guides</Link><Link href="/merch">Merch picks</Link></nav>
      <Link className="nav-cta" href="/anime">Explore anime <span>↗</span></Link>
    </header>
    <section className="section-block">
      <span className="section-kicker">OUR STORY</span>
      <h1 style={{fontSize:"clamp(44px,7vw,84px)",lineHeight:".95"}}>Built for the <span style={{color:"var(--hot)"}}>otaku</span> life.</h1>
      <p style={{maxWidth:760,color:"var(--muted)",lineHeight:2}}>Anime World: Otaku Central is an independent fan-focused discovery project for people who love anime. Our goal is to make it easier to find series, explore character lore, follow watch guides and discover anime-inspired products.</p>
      <h2>What you’ll find here</h2>
      <ul style={{color:"var(--muted)",lineHeight:2}}><li>Anime hubs and starter recommendations.</li><li>Watch guides, explainers and editorial articles.</li><li>Curated merchandise ideas, with any affiliate links clearly disclosed.</li></ul>
      <h2>Independent fan project</h2>
      <p style={{maxWidth:760,color:"var(--muted)",lineHeight:2}}>We are not affiliated with, sponsored by, or endorsed by anime studios, publishers, streaming services or rights holders. Series names and related trademarks belong to their respective owners. We aim to use original writing and only artwork or assets we have permission to use.</p>
      <p><Link className="button button-hot" href="/anime">Explore the anime hub <span>↗</span></Link></p>
    </section>
    <footer className="footer"><Link className="brand footer-brand" href="/">ANIME WORLD <span>✦</span><small>OTAKU CENTRAL</small></Link><p>Made for fans. Built for discovery.</p><div><Link href="/about">About</Link><Link href="/disclosure">Affiliate disclosure</Link><Link href="/news">News & guides</Link></div></footer>
  </main>;
}
