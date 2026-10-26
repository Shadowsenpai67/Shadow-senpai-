import Link from "next/link";
import { searchAnime } from "../lib/anilist";
import AnimeBrowser from "../components/anime-browser";

export const dynamic = "force-dynamic";

const series = [
  { title: "One Piece", query: "One Piece", tag: "PIRATE SAGA", text: "Follow the Straw Hats, discover the Grand Line and explore the mysteries behind the world's greatest treasure." },
  { title: "Naruto", query: "Naruto", tag: "SHINOBI CHRONICLES", text: "Explore ninja villages, clans, rivalries, jutsu and the path to becoming Hokage." },
  { title: "Bleach", query: "Bleach", tag: "SOUL REAPER FILES", text: "Discover Soul Society, Zanpakutō, Bankai and the warriors behind the biggest battles." },
  { title: "Demon Slayer", query: "Demon Slayer: Kimetsu no Yaiba", tag: "NEXT WATCH", text: "Follow Tanjiro’s journey through a dangerous world of demons and swordsmanship." },
  { title: "Jujutsu Kaisen", query: "Jujutsu Kaisen", tag: "CURSED ENERGY", text: "Find trailers and watch options for the sorcerers battling cursed spirits." },
  { title: "Attack on Titan", query: "Attack on Titan", tag: "DARK FANTASY", text: "Uncover the secrets beyond the walls in this intense survival story." },
  { title: "My Hero Academia", query: "Boku no Hero Academia", tag: "HERO FILES", text: "Explore a world of heroes, quirks, rivalries and rising young talent." },
  { title: "Dragon Ball", query: "Dragon Ball Z", tag: "LEGENDARY BATTLES", text: "Find iconic transformations, battles and official series trailers." },
  { title: "Solo Leveling", query: "Ore dake Level Up na Ken", tag: "LEVEL UP", text: "Follow Jinwoo’s rise from the weakest hunter to a powerful force." },
  { title: "Spy x Family", query: "Spy x Family", tag: "COMEDY & ACTION", text: "A spy, an assassin and a telepath try to keep their unusual family secret." },
  { title: "Black Clover", query: "Black Clover", tag: "MAGIC KNIGHTS", text: "Watch Asta’s journey toward becoming the Wizard King." },
  { title: "Chainsaw Man", query: "Chainsaw Man", tag: "DEVIL HUNTERS", text: "Discover the official trailer and check legal platforms for availability." },
];

export default async function AnimeHub() {
  const results = await Promise.all(series.map((item) => searchAnime(item.query)));
  const entries = series.map((item, index) => ({ ...item, media: results[index] }));
  return <main className="site-shell">
    <div className="announcement">ANIME INDEX <span>✦</span> FIND YOUR NEXT UNIVERSE</div>
    <header className="nav"><Link className="brand" href="/">ANIME WORLD <span>✦</span><small>OTAKU CENTRAL</small></Link><nav className="nav-links" aria-label="Main navigation"><Link href="/">Home</Link><Link className="active" href="/anime">Anime hub</Link><Link href="/news">News & guides</Link><Link href="/schedule">Schedule</Link><Link href="/merch">Merch picks</Link></nav><Link className="nav-cta" href="/schedule">Upcoming eps <span>↗</span></Link></header>
    <section className="page-hero"><span className="section-kicker">CHOOSE YOUR UNIVERSE</span><h1>THE ANIME<br/><span>INDEX.</span></h1><p>Tap any poster to find its trailer. Use the small platform buttons to search official catalogues and check where each anime is available. Availability varies by country.</p></section>
    <section className="schedule-section"><div className="section-heading"><div><span className="section-kicker">FAN FAVOURITES & MORE</span><h2>Find your next <em>world.</em></h2></div><span className="schedule-source">Trailers + watch links</span></div><AnimeBrowser entries={entries}/></section>
    <div className="disclaimer-box">Trailer buttons search YouTube for official trailers; check the channel and rights holder before watching. Streaming buttons search Crunchyroll, Netflix and Prime Video catalogues. Availability, subscriptions and language options differ by country. This fan site does not host anime episodes.</div>
    <footer className="footer"><Link className="brand footer-brand" href="/">ANIME WORLD <span>✦</span><small>OTAKU CENTRAL</small></Link><p>Made for fans. Built for discovery.</p><div><Link href="/anime">Anime hub</Link><Link href="/news">News & guides</Link><Link href="/schedule">Schedule</Link><Link href="/about">About</Link><Link href="/disclosure">Affiliate disclosure</Link><Link href="/merch">Merch picks</Link></div><small>Independent fan site. Not affiliated with any anime studios or rights holders.</small></footer>
  </main>;
}
