import Link from "next/link";
import { Icon } from "../icons";

export default function StreamsPage() {
  return <main className="platform-shell">
    <nav className="nav"><Link className="brand" href="/">SHADOW<span>PLAY</span></Link><div className="links"><Link href="/">Home</Link><Link className="active-link" href="/watch">Play</Link><Link href="/#discover">Discover</Link><Link href="/#stats">Stats</Link></div><Link className="btn primary" href="/watch">Play Fortnite <Icon name="play" size={16}/></Link></nav>
    <section className="streams-hero">
      <div><div className="eyebrow"><i className="dot"/> Cloud gaming</div><h1>PLAY THE<br/><span className="gradient">REAL GAME.</span></h1><p>This page is now focused on gameplay, not creator broadcasts. Launch Fortnite through an official cloud gaming provider and play from a supported browser.</p></div>
      <div className="live-summary"><span className="pulse"><Icon name="check" size={15}/></span><div><strong>Fortnite is ready</strong><small>Official cloud session</small></div></div>
    </section>
    <section className="stream-list-section">
      <div className="section-title"><div><h2>Fortnite cloud play</h2><p>The game runs remotely and the live video is streamed to your device.</p></div></div>
      <div className="live-grid">
        <Link href="/watch" className="live-card"><div className="thumb"><div className="thumb-fallback"><Icon name="gamepad" size={38}/></div><span className="live-badge"><Icon name="check" size={13}/> READY</span></div><div className="live-meta"><div className="avatar">F</div><div className="live-copy"><h3>Fortnite Battle Royale</h3><strong>Xbox Cloud Gaming</strong><p>Play in supported browsers</p></div></div></Link>
        <Link href="#requirements" className="live-card"><div className="thumb"><div className="thumb-fallback"><Icon name="cloud" size={38}/></div><span className="viewer-badge">CLOUD</span></div><div className="live-meta"><div className="avatar"><Icon name="zap" size={16}/></div><div className="live-copy"><h3>No local install</h3><strong>Cloud streamed</strong><p>Video + controls over the internet</p></div></div></Link>
      </div>
    </section>
    <section id="requirements" className="section"><div className="grid"><article className="card"><div className="card-icon"><Icon name="globe" size={24}/></div><h3>Supported browser</h3><p>Xbox says cloud gaming can run on supported browsers including Chrome, Edge and Safari, depending on device.</p></article><article className="card"><div className="card-icon"><Icon name="gamepad" size={24}/></div><h3>Controller or touch</h3><p>Fortnite supports controller and touch play through Xbox Cloud Gaming on supported devices.</p></article><article className="card"><div className="card-icon"><Icon name="wifi" size={24}/></div><h3>Good connection</h3><p>Xbox recommends a high-speed connection for cloud gaming; performance varies with network quality and location.</p></article></div></section>
    <footer className="footer"><span>© 2026 ShadowPlay</span><span>Cloud gameplay is provided by the official service.</span></footer>
  </main>;
}
