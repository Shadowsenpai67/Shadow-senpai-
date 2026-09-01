import Link from "next/link";
import { Icon } from "../icons";

const rainUrl = "https://www.rain.co.za/nvidia/";
const gfnPlayUrl = "https://play.geforcenow.com/";

export default function GeForceNowAfricaPage() {
  return <main className="shell">
    <nav className="nav"><Link className="brand" href="/">SHADOW<span>PLAY</span></Link><div className="links"><Link href="/">Home</Link><Link className="active-link" href="/games">Games</Link><Link href="/#discover">Discover</Link><Link href="/#stats">Stats</Link></div><span className="live"><Icon name="cloud" size={14}/> AFRICA SOUTH</span></nav>
    <section className="watch">
      <Link className="back" href="/games"><Icon name="arrow-left" size={16}/> Back to games</Link>
      <section className="streams-hero"><div><div className="eyebrow"><i className="dot"/> GeForce NOW · rain · Johannesburg</div><h1>GEFORCE NOW<br/><span className="gradient">AFRICA.</span></h1><p>ShadowPlay now includes the official GeForce NOW Africa route. NVIDIA lists rain in South Africa as the GeForce NOW Alliance partner, with the Africa South server in Johannesburg.</p></div><div className="live-summary"><Icon name="cloud" size={28}/><div><strong>Africa South</strong><small>Johannesburg · rain partner</small></div></div></section>
      <div className="hero-card" style={{marginTop:24}}><div className="live-head"><strong>BROWSER CLOUD PLAY</strong><span className="live"><Icon name="check" size={14}/> SUPPORTED</span></div><div style={{padding:28}}><h2>Launch GeForce NOW in your browser</h2><p style={{color:"#aab1c2",lineHeight:1.7}}>GeForce NOW supports browser play, so you do not need to install the game files on your device. You still need a valid GeForce NOW membership and the required game entitlement/account.</p><div className="actions"><a className="btn primary" href={gfnPlayUrl}><Icon name="play" size={16}/> Open GeForce NOW</a><a className="btn secondary" href={rainUrl}><Icon name="arrow-right" size={16}/> Open rain signup</a></div></div></div>
      <div className="stream-grid" style={{marginTop:20}}><article className="stream"><div className="stream-top"><span><Icon name="globe" size={22}/></span><span className="tag">REGION</span></div><h3>South Africa</h3><p>NVIDIA's supported-location list currently names rain in South Africa as the Alliance partner. Nigeria is not listed as a supported GeForce NOW market.</p></article><article className="stream"><div className="stream-top"><span><Icon name="cloud" size={22}/></span><span className="tag">SERVER</span></div><h3>Johannesburg</h3><p>The Africa South GeForce NOW server is the Johannesburg partner location operated by rain.</p></article><article className="stream"><div className="stream-top"><span><Icon name="gamepad" size={22}/></span><span className="tag">GAMES</span></div><h3>Apex · Fortnite · COD</h3><p>These titles are represented in GeForce NOW's broader game ecosystem, but individual game availability and account requirements still apply.</p></article></div>
      <div className="notice"><strong>Nigeria availability:</strong><br/>This page does not claim that GeForce NOW Africa is officially supported in Nigeria. The service is presented as the legitimate Africa/South Africa route; ShadowPlay does not use VPNs or other methods to bypass regional restrictions.</div>
    </section>
  </main>;
}
