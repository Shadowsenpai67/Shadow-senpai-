"use client";

import Link from "next/link";

const fortniteCloudUrl = "https://www.xbox.com/play/games/fortnite-battle-royale/9p6lnn3kz75r";

export default function WatchPage() {
  return (
    <main className="shell">
      <nav className="nav">
        <Link className="brand" href="/">SHADOW<span>PLAY</span></Link>
        <div className="links"><Link href="/">Home</Link><Link className="active-link" href="/watch">Play</Link><Link href="/#discover">Discover</Link><Link href="/#stats">Stats</Link></div>
        <span className="live">● CLOUD PLAY</span>
      </nav>

      <section className="watch">
        <Link className="back" href="/">← Back to ShadowPlay</Link>
        <div className="section-title">
          <div><h2>Play Fortnite in your browser</h2><p>Cloud gaming powered by the official Xbox Cloud Gaming service.</p></div>
        </div>
        <div className="player" style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:460,padding:32}}>
          <div style={{maxWidth:700,textAlign:"center"}}>
            <div className="card-icon" style={{fontSize:56}}>🎮</div>
            <h1 style={{fontSize:"clamp(32px,6vw,64px)",margin:"12px 0"}}>FORTNITE</h1>
            <p style={{color:"#aab1c2",fontSize:16,lineHeight:1.7}}>Launch the real Fortnite game through Xbox Cloud Gaming. Your browser receives the live game video and sends your controls back to the cloud gaming server.</p>
            <div className="actions" style={{justifyContent:"center",marginTop:24}}>
              <a className="btn primary" href={fortniteCloudUrl}>▶ Play Fortnite Now</a>
              <Link className="btn secondary" href="#requirements">How it works</Link>
            </div>
            <p style={{color:"#72798b",fontSize:12,marginTop:18}}>A Microsoft account is required. Availability and supported features vary by region and device.</p>
          </div>
        </div>

        <div id="requirements" className="stream-grid" style={{marginTop:20}}>
          <article className="stream"><div className="stream-top"><span>☁️</span><span className="tag">CLOUD</span></div><h3>No Fortnite install</h3><p>The game runs on Microsoft's cloud infrastructure and streams to your supported browser.</p></article>
          <article className="stream"><div className="stream-top"><span>🎮</span><span className="tag">INPUT</span></div><h3>Controller or touch</h3><p>Xbox lists controller support and touch controls for supported Fortnite cloud sessions.</p></article>
          <article className="stream"><div className="stream-top"><span>⚡</span><span className="tag">NETWORK</span></div><h3>Fast connection</h3><p>For a smooth session, Xbox recommends a high-speed connection and supported browser.</p></article>
        </div>

        <div className="notice">ShadowPlay does not host Fortnite or pretend to be a Fortnite game server. The Play button hands the session to the official cloud-gaming service, which is what makes full real-time gameplay possible from a browser.</div>
      </section>
    </main>
  );
}
