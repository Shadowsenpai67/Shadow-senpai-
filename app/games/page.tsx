import Link from "next/link";
import { games } from "../games";
import { Icon } from "../icons";

export default function GamesPage() {
  const apex = games.find((game) => game.slug === "apex-legends");
  const browserGames = games.filter((game) => game.browserPlayable).length;

  return <main className="shell">
    <nav className="nav"><Link className="brand" href="/">SHADOW<span>PLAY</span></Link><div className="links"><Link href="/">Home</Link><Link className="active-link" href="/games">Games</Link><Link href="/#discover">Discover</Link><Link href="/#stats">Stats</Link></div><a className="btn primary" href={apex?.playUrl ?? "https://airgpu.com/"}>Apex cloud PC <Icon name="play" size={16}/></a></nav>

    <section className="streams-hero"><div><div className="eyebrow"><i className="dot"/> Nigeria-aware cloud gaming hub</div><h1>NO FAKE<br/><span className="gradient">PLAY BUTTONS.</span></h1><p>We checked the launch routes instead of assuming every cloud provider works in Nigeria. GeForce NOW has been removed from Apex because Nigeria is not currently a supported GeForce NOW location. Apex now points to airgpu, which has an African Cape Town location and a full cloud PC model.</p></div><div className="live-summary"><Icon name="cloud" size={28}/><div><strong>{browserGames} browser-ready in Nigeria</strong><small>{games.length} games checked · region and platform aware</small></div></div></section>

    <section className="section game-feature"><div className="hero-card"><div className="live-head"><strong>APEX LEGENDS · NIGERIA ROUTE</strong><span className="live"><Icon name="cloud" size={14}/> AIRGPU</span></div><div className="feature-copy"><div><span className="tag">CAPE TOWN CLOUD PC</span><h2>Play Apex without GeForce NOW</h2><p>{apex?.description}</p><div className="actions"><a className="btn primary" href={apex?.playUrl ?? "https://airgpu.com/"}><Icon name="play" size={16}/> Launch airgpu</a><a className="btn secondary" href="https://www.ea.com/games/apex-legends"><Icon name="arrow-right" size={16}/> Apex official page</a></div></div></div></div></section>

    <section className="section"><div className="section-title"><div><h2>Game library</h2><p>Each entry now states whether it is browser-playable, region-limited, mobile-only or dependent on your own console/cloud PC.</p></div></div><div className="grid game-grid">{games.map(game=><article className={"card game-card "+(game.slug==="apex-legends"?"featured-game":"")} key={game.slug}><div className="game-icon"><Icon name={game.browserPlayable?"cloud":"gamepad"} size={26}/></div><span className="tag">{game.platform}</span><h3>{game.name}</h3><p>{game.description}</p><small>{game.note}</small><a className="btn secondary game-button" href={game.playUrl}>{game.actionLabel}<Icon name="arrow-right" size={15}/></a></article>)}</div></section>

    <section className="section"><div className="notice"><strong>Why Apex changed:</strong><br/>NVIDIA's current GeForce NOW supported-location list does not include Nigeria. airgpu is a better regional fit because it offers cloud PCs and lists Cape Town among its African data-center locations. The ShadowPlay site still does not host game video itself; the external provider supplies the actual cloud machine and stream. Availability, anti-cheat support, pricing and latency can change.</div></section>
    <footer className="footer"><span>© 2026 ShadowPlay</span><span>Official services only · No game files hosted</span></footer>
  </main>;
}
