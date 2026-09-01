import Link from "next/link";
import { games } from "../games";
import { Icon } from "../icons";

export default function GamesPage() {
  const featured = games[0];
  const cloudGames = games.filter((game) => game.browserPlayable).length;

  return <main className="shell">
    <nav className="nav"><Link className="brand" href="/">SHADOW<span>PLAY</span></Link><div className="links"><Link href="/">Home</Link><Link className="active-link" href="/games">Games</Link><Link href="/#discover">Discover</Link><Link href="/#stats">Stats</Link></div><Link className="btn primary" href="/watch">Play Fortnite</Link></nav>

    <section className="streams-hero"><div><div className="eyebrow"><i className="dot"/> Multi-game cloud hub</div><h1>Fortnite first.<br/><span className="gradient">More games too.</span></h1><p>Every game now has an honest launch path. Cloud-playable titles are marked for browser streaming, while games that require an app, console or separate service are clearly labeled instead of showing a misleading download or play button.</p></div><div className="live-summary"><Icon name="cloud" size={28}/><div><strong>{cloudGames} browser-playable</strong><small>{games.length} games checked · cloud, console and mobile</small></div></div></section>

    <section className="section game-feature"><div className="hero-card"><div className="live-head"><strong>FEATURED · FORTNITE</strong><span className="live"><Icon name="check" size={14}/> BROWSER READY</span></div><div className="feature-copy"><div><span className="tag">XBOX CLOUD GAMING</span><h2>{featured.name}</h2><p>{featured.description}</p><div className="actions"><a className="btn primary" href={featured.playUrl}><Icon name="play" size={16}/> Play in browser</a><Link className="btn secondary" href="/account"><Icon name="users" size={16}/> Microsoft account help</Link></div></div></div></div></section>

    <section className="section"><div className="section-title"><div><h2>Game library</h2><p>We checked each current game entry and only label a title as browser-playable when there is a real supported cloud/browser route.</p></div></div><div className="grid game-grid">{games.map(game=><article className={"card game-card "+(game.status==="featured"?"featured-game":"")} key={game.slug}><div className="game-icon"><Icon name={game.browserPlayable?"cloud":"gamepad"} size={26}/></div><span className="tag">{game.platform}</span><h3>{game.name}</h3><p>{game.description}</p><small>{game.note}</small><a className="btn secondary game-button" href={game.playUrl}>{game.actionLabel}<Icon name="arrow-right" size={15}/></a></article>)}</div></section>

    <section className="section"><div className="notice"><strong>Important: ShadowPlay does not host the games.</strong><br/>When a title is browser-playable, the button opens the provider's real cloud-gaming session. The provider handles the game video, input, login and entitlement. For example, Xbox currently exposes Fortnite and Call of Duty cloud experiences in its browser service, while GeForce NOW provides a browser experience for supported games such as Apex Legends. Availability, subscriptions, region and device support can change.</div></section>
    <footer className="footer"><span>© 2026 ShadowPlay</span><span>Official services only · No game files hosted</span></footer>
  </main>;
}
