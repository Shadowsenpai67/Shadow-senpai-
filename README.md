# Shadow Senpai Stream

A premium Next.js streaming discovery platform for anime, movies, TV and animation.

## Data sources

- **AniList** — public GraphQL API for anime metadata, artwork, genres, scores, episodes and airing information. No API key is required for the initial public integration.
- **TMDB** — movies and TV metadata. Add `TMDB_API_KEY` in Vercel/your local environment to enable the movie/TV feed. TMDB also exposes watch-provider availability, but provider links are not the same thing as permission to host or redistribute video.
- **Internet Archive** — the included player demo uses an openly licensed Big Buck Bunny source. The platform is designed to accept direct MP4/HLS sources that you own, license, or are otherwise authorized to stream.

## Environment variables

```env
TMDB_API_KEY=your_tmdb_api_key
```

## Run locally

```bash
npm install
npm run dev
```

## Important licensing note

Metadata APIs do not grant streaming rights. Do not add commercial anime, movies, cartoons or TV episodes to the player unless you have the necessary rights or the source explicitly permits embedding/redistribution. The codebase intentionally separates discovery metadata from playback sources.
