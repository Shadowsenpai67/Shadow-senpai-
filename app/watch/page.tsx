"use client";

import Link from "next/link";
import { Icon } from "../icons";

const fortniteCloudUrl = "https://www.xbox.com/play/games/fortnite-battle-royale/9p6lnn3kz75r";

export default function WatchPage() {
  return <main className="shell">
    <nav className="nav"><Link className="brand" href="/">SHADOW<span>PLAY</span></Link><div className="links"><Link href="/">Home</Link><Link className="active-link" href="/games">Games</Link><Link className="active-link" href="/watch">Play</Link><Link href="/#discover">Discover</Link><Link href="/#stats">Stats</Link></div><span className="live"><Icon name="cloud" size={14}/> FORTNITE CLOUD</span></nav>
    <section className="watch">
      <Link className="back" href="/games"><Icon name="arrow-left" size={16}/> Back to games</Link>
      <div className="section-title"><div><span className="eyebrow">FORTNITE · FLAGSHIP EXPERIENCE</span><h2>Play Fortnite in your browser</h2><p>Cloud gaming powered by the official Xbox Cloud Gaming service.</p></div></div>
      <div className="player" style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:460,padding:32}}><div style={{maxWidth:700,textAlign:"center"}}><div className="card-icon"><Icon name="gamepad" size={56}/></div><h1 style={{fontSize:"clamp(32px,6vw,64px)",margin:"12px 0"}}>FORTNITE</h1><p style={{color:"#aab1c2",fontSize:16,lineHeight:1.7}}>Launch the real Fortnite game through Xbox Cloud Gaming. Your browser receives the live game video and sends your controls back to the cloud gaming service.</p><div className="actions" style={{justifyContent:"center",marginTop:24}}><a className="btn primary" href={fortniteCloudUrl}><Icon name="play" size={16}/> Play Fortnite Now</a><Link className="btn secondary" href="/account"><Icon name="users" size={16}/> Microsoft account help</Link></div><p style={{color:"#72798b",fontSize:12,marginTop:18}}>A Microsoft account is required. Microsoft handles account creation and human verification. Availability and supported features vary by region and device.</p></div></div>
      <div id="requirements" className="stream-grid" style={{marginTop:20}}><article className="stream"><div className="stream-top"><span><Icon name="cloud" size={22}/></span><span className="tag">CLOUD</span></div><h3>No Fortnite install</h3><p>The game runs on Microsoft's cloud infrastructure and streams to your supported browser.</p></article><article className="stream"><div className="stream-top"><span><Icon name="gamepad" size={22}/></span><span className="tag">INPUT</span></div><h3>Controller or touch</h3><p>Xbox lists controller support and touch controls for supported Fortnite cloud sessions.</p></article><article className="stream"><div className="stream-top"><span><Icon name="zap" size={22}/></span><span className="tag">NETWORK</span></div><h3>Fast connection</h3><p>Xbox recommends a high-speed connection; performance varies with your device, network and location.</p></article></div>
      <div className="notice"><strong>Microsoft verification</strong><br/>ShadowPlay does not attempt to bypass Microsoft's "are you a human" verification. If signup gets stuck, use the official account flow, avoid repeated automated retries, and try another supported browser or device. <Link href="/account" style={{color:"#bba8ff"}}>See the account guide</Link>.</div>
      <div className="section-title" style={{marginTop:50}}><div><h2>Want another game?</h2><p>Choose another official cloud, console or mobile launch path.</p></div><Link className="btn secondary" href="/games">Open game library <Icon name="arrow-right" size={16}/></Link></div>
    </section>
  </main>;
}
