"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const channels = [
  { id: "fortnite", name: "Fortnite", desc: "Official Fortnite channel" },
  { id: "sypherpk", name: "SypherPK", desc: "Fortnite creator stream" },
  { id: "nickeh30", name: "Nick Eh 30", desc: "Fortnite creator stream" },
];

export default function WatchPage() {
  const params = useSearchParams();
  const channel = params.get("channel") || "fortnite";
  const current = channels.find((item) => item.id === channel) ?? channels[0];
  const parent = typeof window !== "undefined" ? window.location.hostname : "localhost";
  const src = `https://player.twitch.tv/?channel=${encodeURIComponent(current.id)}&parent=${encodeURIComponent(parent)}&autoplay=false&muted=false`;

  return <main className="shell"><nav className="nav"><Link className="brand" href="/">SHADOW<span>PLAY</span></Link><div className="links"><Link href="/#discover">Discover</Link><Link href="/#streams">Live Streams</Link><Link href="/#stats">Stats</Link></div><span className="live">● WATCH</span></nav><section className="watch"><Link className="back" href="/">← Back to ShadowPlay</Link><div className="section-title"><div><h2>{current.name}</h2><p>{current.desc} · Twitch player</p></div></div><div className="player"><iframe src={src} allow="autoplay; fullscreen" title={`${current.name} Fortnite stream`} /></div><div className="notice">The player loads the selected Twitch channel directly. If the channel is not live, Twitch may show its offline state. ShadowPlay does not host or rebroadcast the video; it embeds the platform's player.</div><div className="stream-grid" style={{marginTop:20}}>{channels.map(item => <Link className="stream" href={`/watch?channel=${item.id}`} key={item.id}><div className="stream-top"><span>🎮</span><span className="tag">SWITCH</span></div><h3>{item.name}</h3><p>{item.desc}</p></Link>)}</div></section></main>;
}
