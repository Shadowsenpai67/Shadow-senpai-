"use client";

import Link from "next/link";
import { Icon } from "../icons";

const fortniteCloudUrl = "https://www.xbox.com/play/games/fortnite-battle-royale/9p6lnn3kz75r";

export default function WatchPage() {
  return <main className="shell">
    <nav className="nav"><Link className="brand" href="/">SHADOW<span>PLAY</span></Link><div className="links"><Link href="/">Home</Link><Link className="active-link" href="/games">Games</Link><Link className="active-link" href="/watch">Play</Link><Link href="/#discover">Discover</Link><Link href="/#stats">Stats</Link></div><span className="live"><Icon name="cloud" size={14}/> REGION CHECK</span></nav>
    <section className="watch">
      <Link className="back" href="/games"><Icon name="arrow-left" size={16}/> Back to games</Link>
      <div className="section-title"><div><span className="eyebrow">FORTNITE · REGION CHECK</span><h2>Fortnite cloud play is region-limited</h2><p>Xbox Cloud Gaming is an official browser route for Fortnite, but it requires a supported Xbox Cloud Gaming market. Nigeria is not currently listed as a supported cloud-gaming market.</p></div></div>
      <div className="player" style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:460,padding:32}}><div style={{maxWidth:700,textAlign:"center"}}><div className="card-icon"><Icon name="globe" size={56}/></div><h1 style={{fontSize:"clamp(32px,6vw,64px)",margin:"12px 0"}}>REGION LIMITED</h1><p style={{color:"#aab1c2",fontSize:16,lineHeight:1.7}}>ShadowPlay cannot remove Microsoft's regional restriction. We have stopped presenting this page as a guaranteed Nigerian Fortnite stream so you do not get sent into a dead-end launch flow.</p><div className="actions" style={{justifyContent:"center",marginTop:24}}><a className="btn primary" href={fortniteCloudUrl}><Icon name="arrow-right" size={16}/> Check Xbox Cloud Gaming</a><Link className="btn secondary" href="/games"><Icon name="gamepad" size={16}/> Find a Nigeria-friendly route</Link></div><p style={{color:"#72798b",fontSize:12,marginTop:18}}>Microsoft account and supported-region requirements apply. Do not use the site to bypass regional restrictions.</p></div></div>
      <div id="requirements" className="stream-grid" style={{marginTop:20}}><article className="stream"><div className="stream-top"><span><Icon name="globe" size={22}/></span><span className="tag">REGION</span></div><h3>Nigeria check</h3><p>Xbox Cloud Gaming is only available in selected markets. The current supported-region information does not list Nigeria.</p></article><article className="stream"><div className="stream-top"><span><Icon name="gamepad" size={22}/></span><span className="tag">DEVICE</span></div><h3>Supported browser</h3><p>Where Xbox Cloud Gaming is supported, Microsoft supports compatible browsers such as Chrome, Edge and Safari.</p></article><article className="stream"><div className="stream-top"><span><Icon name="zap" size={22}/></span><span className="tag">NETWORK</span></div><h3>Fast connection</h3><p>Xbox recommends a high-speed connection for cloud gaming; performance still varies with network quality and location.</p></article></div>
      <div className="notice"><strong>Looking for Apex in Nigeria?</strong><br/>Open the Games page and use the airgpu route. It provides cloud PCs and lists Cape Town as an African location, which is a more suitable starting point than GeForce NOW for this region.</div>
      <div className="section-title" style={{marginTop:50}}><div><h2>Want another game?</h2><p>Choose a route that matches the game's real platform and regional availability.</p></div><Link className="btn secondary" href="/games">Open game library <Icon name="arrow-right" size={16}/></Link></div>
    </section>
  </main>;
}
