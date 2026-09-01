import Link from "next/link";
import { games } from "../games";
import { Icon } from "../icons";

export default function GamesPage() {
  const apex = games.find((game) => game.slug === "apex-legends");
  const browserGames = games.filter((game) => game.browserPlayable && game.freeInNigeria).length;

  return <main className="shell">
    <nav className="nav"><Link className="brand" href="/">SHADOW<span>PLAY</span></Link><div className="links"><Link href="/">Home</Link><Link className="active-link" href="/games">Games</Link><Link href="/#discover">Discover</Link><Link href="/#stats">Stats</Link></div><a className="btn primary" href={apex?.playUrl ?? "https://airgpu.com/"}>Apex cloud option <Icon name="play" size={16}/></a></nav>

    <section className="streams-hero"><div><div className="eyebrow"><i className="dot"/> Nigeria-aware cloud gaming hub</div><h1>NO FAKE<br/><span className="gradient">PLAY BUTTONS.</span></h1><p>Every game is checked against its real launch method. We do not label Apex, Call of Duty or Black Ops as free browser streams when the required cloud service is unavailable, paid, or region-limited in Nigeria.</p></div><div className="live-summary"><Icon name="cloud" size={28}/><div><strong>{browserGames} free browser streams in Nigeria</strong><small>{games.length} games checked · region, platform and cost aware</small></div></div></section>

    <section className="section game-feature"><div className="hero-card"><div className="live-head"><strong>APEX LEGENDS · NIGERIA ROUTE</strong><span className="live"><Icon name="cloud" size={14}/> CLOUD PC</span></div><div className="feature-copy"><div><span className="tag">CAPE TOWN CLOUD PC</span><h2>Use a real cloud PC for Apex</h2><p>{apex?.description}</p><div className="actions"><a className="btn primary" href={apex?.playUrl ?? "https://airgpu.com/"}><Icon name="play" size={16}/> Check airgpu</a><a className="btn secondary" href="https://www.ea.com/games/apex-legends"><Icon name="arrow-right" size={16}/> Apex official page</a></div></div></div></div></section>

    <section className="section"><div className="section-title"><div><h2>Game library</h2><p>Each entry tells you whether it is a free browser stream, paid/region-limited cloud service, mobile-only game, or a service that needs your own hardware.</p></div></div><div className="grid game-grid">{games.map(game=><article className={"card game-card "+(game.slug==="apex-legends"?"featured-game":"")} key={game.slug}><div className="game-icon"><Icon name={game.browserPlayable?"cloud":"gamepad"} size={26}/></div><span className="tag">{game.platform}</span><h3>{game.name}</h3><p>{game.description}</p><small>{game.note}</small><a className="btn secondary game-button" href={game.playUrl}>{game.actionLabel}<Icon name="arrow-right" size={15}/></a></article>)}</div></section>

    <section className="section"><div className="notice"><strong>Important:</strong><br/>There is currently no legitimate free, Nigeria-supported, in-browser cloud stream that I can truthfully wire into ShadowPlay for Apex Legends or the Call of Duty titles above. Xbox Cloud Gaming supports browser play, but Microsoft says availability varies by region, plan and platform; Amazon Luna's cloud-delivered games are currently limited to 14 countries. A site cannot safely create the missing cloud GPU infrastructure itself. ShadowPlay therefore keeps the game buttons honest instead of sending users to broken downloads or pretending a paid/unsupported service is free.</div></section>
    <footer className="footer"><span>© 2026 ShadowPlay</span><span>Official services only · No game files hosted</span></footer>
  </main>;
}
