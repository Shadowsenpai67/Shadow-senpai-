import Link from "next/link";

export default function DisclosurePage() {
  return <main className="site-shell">
    <div className="announcement">CLEAR LINKS. HONEST RECOMMENDATIONS <span>✦</span> OTaku CENTRAL</div>
    <header className="nav">
      <Link className="brand" href="/">ANIME WORLD <span>✦</span><small>OTAKU CENTRAL</small></Link>
      <nav className="nav-links" aria-label="Main navigation"><Link href="/">Home</Link><Link href="/anime">Anime hub</Link><Link href="/news">News & guides</Link><Link href="/merch">Merch picks</Link></nav>
      <Link className="nav-cta" href="/merch">Merch picks <span>↗</span></Link>
    </header>
    <section className="section-block">
      <span className="section-kicker">TRANSPARENCY</span>
      <h1 style={{fontSize:"clamp(44px,7vw,84px)",lineHeight:".95"}}>Affiliate <span style={{color:"var(--hot)"}}>disclosure.</span></h1>
      <p style={{maxWidth:760,color:"var(--muted)",lineHeight:2}}>Anime World: Otaku Central may use affiliate links when eligible partnerships are approved. If you click an affiliate link and make a qualifying purchase, we may earn a commission at no additional cost to you.</p>
      <h2>How we handle recommendations</h2>
      <ul style={{color:"var(--muted)",lineHeight:2}}><li>Affiliate or sponsored links will be labelled clearly near the recommendation.</li><li>We will not claim that a product is officially licensed unless we can verify that claim.</li><li>Availability, shipping, prices and return terms are controlled by the seller and may change.</li><li>A recommendation is not a guarantee of quality, discount or endorsement by an anime studio or rights holder.</li></ul>
      <h2>Current status</h2>
      <p style={{maxWidth:760,color:"var(--muted)",lineHeight:2}}>At the time of publication, no affiliate programme is connected on this site. No commission is guaranteed. This page will be updated when partnerships are approved and affiliate links are added.</p>
      <p><Link className="button button-hot" href="/merch">View merch picks <span>↗</span></Link></p>
    </section>
    <footer className="footer"><Link className="brand footer-brand" href="/">ANIME WORLD <span>✦</span><small>OTAKU CENTRAL</small></Link><p>Made for fans. Built for discovery.</p><div><Link href="/about">About</Link><Link href="/disclosure">Affiliate disclosure</Link><Link href="/news">News & guides</Link></div></footer>
  </main>;
}
