export type AnimeMedia = {
  id: number;
  title: { english?: string | null; romaji: string };
  coverImage?: { large?: string | null; extraLarge?: string | null };
  description?: string | null;
  genres?: string[];
  siteUrl?: string;
  status?: string;
  episodes?: number | null;
  season?: string | null;
  seasonYear?: number | null;
  startDate?: { year?: number | null; month?: number | null; day?: number | null };
  nextAiringEpisode?: { airingAt: number; episode: number } | null;
  airingSchedule?: { nodes: { airingAt: number; episode: number }[] };
};

const endpoint = "https://graphql.anilist.co";

async function queryAniList<T>(query: string, variables: Record<string, unknown> = {}): Promise<T | null> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
      signal: AbortSignal.timeout(7000),
    });
    if (!response.ok) return null;
    const json = await response.json();
    return json.data as T;
  } catch {
    return null;
  }
}

export async function getSeasonAnime(): Promise<AnimeMedia[]> {
  const query = `query { Page(perPage: 18) { media(season: FALL, seasonYear: 2026, sort: POPULARITY_DESC, type: ANIME) { id title { english romaji } coverImage { large extraLarge } description(asHtml: false) genres siteUrl status episodes startDate { year month day } nextAiringEpisode { airingAt episode } } } }`;
  const data = await queryAniList<{ Page: { media: AnimeMedia[] } }>(query);
  return data?.Page?.media ?? [];
}

export async function getUpcomingEpisodes(): Promise<AnimeMedia[]> {
  const query = `query { Page(perPage: 20) { airingSchedules(notYetAired: true, sort: TIME) { airingAt episode media { id title { english romaji } coverImage { large extraLarge } siteUrl genres status } } } }`;
  const data = await queryAniList<{ Page: { airingSchedules: { airingAt: number; episode: number; media: AnimeMedia }[] } }>(query);
  const entries = data?.Page?.airingSchedules ?? [];
  return entries.map((entry) => ({
    ...entry.media,
    nextAiringEpisode: { airingAt: entry.airingAt, episode: entry.episode },
  }));
}

export async function searchAnime(title: string): Promise<AnimeMedia | null> {
  const query = `query ($search: String) { Media(search: $search, type: ANIME) { id title { english romaji } coverImage { large extraLarge } description(asHtml: false) genres siteUrl status episodes startDate { year month day } nextAiringEpisode { airingAt episode } } }`;
  const data = await queryAniList<{ Media: AnimeMedia | null }>(query, { search: title });
  return data?.Media ?? null;
}

export function animeTitle(media: AnimeMedia) {
  return media.title.english || media.title.romaji;
}

export function formatAnimeDate(unixSeconds?: number | null) {
  if (!unixSeconds) return "Date TBA";
  return new Date(unixSeconds * 1000).toLocaleString("en-GB", {
    weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "Africa/Lagos",
  }) + " WAT";
}
