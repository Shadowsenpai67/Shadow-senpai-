import Link from "next/link";
import { animeTitle, formatAnimeDate, getSeasonAnime, getUpcomingEpisodes } from "../lib/anilist";

export const dynamic = "force-dynamic";

function trailerSearch(title: string, episode?: number | null) {
  const query = episode ? title + " episode " + episode + " preview trailer" : title + " official anime trailer";
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);
}

function watchSearch(title: string) {
  return [
    { label: "Crunchyroll", href: "https://www.crunchyroll.com/search?q=" + encodeURIComponent(title) },
    { label: "Netflix", href: "https://www.netflix.com/search?q=" + encodeURIComponent(title) },
    { label: "Prime Video", href: "https://www.primevideo.com/search/ref=atv_nb_sr?phrase=" + encodeURIComponent(title) },
  ];
}

function Poster({ src, title }: { src?: string | null; title: string }) {
  return <div className="poster-frame">{src ? <img src={src} alt={title + " poster"} loading="lazy" /> : <div className="poster-fallback">ANIME<br/><span>✦</span></div>}</div>;
}

export default async function SchedulePage() {
  const [episodes, seasonAnime] = await Promise.all([getUpcomingEpisodes(), getSeasonAnime()]);
  return <main className="site-shell">
    <div className="announcement">THE ANIME CALENDAR <span>✦</span> DATES DISPLAYED IN NIGERIA TIME (WAT)</div>
    <header className="nav">
      <Link className="brand" href="/">ANIME WORLD <span>✦</span><small>OTAKU CENTRAL</small></Link>
      <nav className="nav-links" aria-label="Main navigation"><Link href="/">Home</Link><Link href="/anime">Anime hub</Link><Link href="/news">News & guides</Link><Link className="active" href="/schedule">Schedule</Link><Link href="/merch">Merch picks</Link></nav>
      <Link className="nav-cta" href="/news">Anime news <span>↗</span></Link>
    </header>
    <section className="page-hero">
      <span className="section-kicker">AIRING NOW & NEXT</span>
      <h1>WHAT’S NEXT<br/><span>ON SCREEN.</span></h1>
      <p>Upcoming episode times and seasonal anime, with poster artwork and official platform search links. Times are shown in West Africa Time (WAT). Schedules can change, and streaming availability varies by country.</p>
    </section>
    <section className="schedule-section">
      <div className="section-heading"><div><span className="section-kicker">NEXT EPISODES</span><h2>Coming <em>up.</em></h2></div><span className="schedule-source">Data: AniList</span></div>
      {episodes.length ? <div className="schedule-grid">{episodes.map((media, index) => {
        const title = animeTitle(media);
        const airing = media.nextAiringEpisode;
        return <article className="schedule-card" key={media.id + "-" + (airing?.episode ?? index)}>
          <Poster src={media.coverImage?.extraLarge || media.coverImage?.large} title={title}/>
          <div className="schedule-card-copy"><span className="pill">EPISODE {airing?.episode ?? "TBA"}</span><h3>{title}</h3><p className="airing-time">{formatAnimeDate(airing?.airingAt)}</p>
            <div className="watch-links"><a className="trailer-link" href={trailerSearch(title, media, airing?.episode)} target="_blank" rel="noopener noreferrer">▶ Episode preview / trailer</a>{watchSearch(title).map((provider) => <a key={provider.label} href={provider.href} target="_blank" rel="noopener noreferrer">{provider.label} ↗</a>)}</div>
          </div>
        </article>;
      })}</div> : <div className="disclaimer-box">The live episode schedule is temporarily unavailable. Try again shortly, or check the official <a href="https://www.crunchyroll.com/simulcastcalendar" target="_blank" rel="noopener noreferrer">Crunchyroll release calendar ↗</a>.</div>}
    </section>
    <section className="schedule-section">
      <div className="section-heading"><div><span className="section-kicker">FALL 2026</span><h2>Season <em>spotlight.</em></h2></div><span className="schedule-source">Dates may change</span></div>
      {seasonAnime.length ? <div className="schedule-grid season-grid">{seasonAnime.map((media) => {
        const title = animeTitle(media);
        const start = media.startDate?.year && media.startDate?.month && media.startDate?.day
          ? new Date(Date.UTC(media.startDate.year, media.startDate.month - 1, media.startDate.day)).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })
          : "Date TBA";
        return <article className="schedule-card season-card" key={media.id}>
          <Poster src={media.coverImage?.extraLarge || media.coverImage?.large} title={title}/>
          <div className="schedule-card-copy"><span className="pill">{media.status?.replaceAll("_", " ") || "SEASON PICK"}</span><h3>{title}</h3><p>{start} · {media.episodes ? media.episodes + " episodes listed" : "Episode count TBA"}</p>
            <p className="season-description">{media.description?.replace(/<[^>]*>/g, "").replace(/&#039;/g, "'").slice(0, 170) || "Season details and episode announcements may be updated as more information is confirmed."}{media.description && media.description.length > 170 ? "…" : ""}</p>
            <div className="watch-links"><a className="trailer-link" href={trailerSearch(title, media)} target="_blank" rel="noopener noreferrer">▶ Official trailer</a>{watchSearch(title).map((provider) => <a key={provider.label} href={provider.href} target="_blank" rel="noopener noreferrer">{provider.label} ↗</a>)}</div>
          </div>
        </article>;
      })}</div> : <div className="disclaimer-box">Season information is temporarily unavailable. Visit the <a href="https://www.crunchyroll.com/news/seasonal-lineup/2026/9/15/fall-anime-2026-crunchyroll" target="_blank" rel="noopener noreferrer">official Fall 2026 Crunchyroll lineup ↗</a>.</div>}
    </section>
    <div className="disclaimer-box">Watch buttons search the official platform catalogue; they do not guarantee a show is available in Nigeria or included in your subscription. Always check the platform’s local catalogue, language options and release time. We link to legal services only and do not host anime episodes.</div>
    <footer className="footer"><Link className="brand footer-brand" href="/">ANIME WORLD <span>✦</span><small>OTAKU CENTRAL</small></Link><p>Made for fans. Built for discovery.</p><div><Link href="/anime">Anime hub</Link><Link href="/news">News & guides</Link><Link href="/schedule">Schedule</Link><Link href="/about">About</Link><Link href="/disclosure">Affiliate disclosure</Link></div><small>Independent fan site. Not affiliated with any anime studios or rights holders.</small></footer>
  </main>;
}
