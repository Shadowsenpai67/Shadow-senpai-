export type Game = {
  slug: string;
  name: string;
  platform: string;
  description: string;
  status: "featured" | "cloud" | "official";
  playUrl: string;
  note: string;
  actionLabel: string;
  browserPlayable: boolean;
};

export const games: Game[] = [
  {
    slug: "fortnite",
    name: "Fortnite",
    platform: "Xbox Cloud Gaming",
    description: "The flagship ShadowPlay experience. Launch the real Fortnite session in your supported browser.",
    status: "featured",
    playUrl: "https://www.xbox.com/play/games/fortnite-battle-royale/9p6lnn3kz75r",
    note: "Free cloud play with a Microsoft account in supported regions.",
    actionLabel: "Play in browser",
    browserPlayable: true,
  },
  {
    slug: "black-ops-7",
    name: "Call of Duty: Black Ops 7",
    platform: "Xbox Cloud Gaming",
    description: "Play the current Black Ops experience through Xbox Cloud Gaming when the title is available for your account and region.",
    status: "cloud",
    playUrl: "https://www.xbox.com/en-us/play",
    note: "Cloud play requires the applicable Game Pass plan or game purchase.",
    actionLabel: "Play in browser",
    browserPlayable: true,
  },
  {
    slug: "call-of-duty",
    name: "Call of Duty / Warzone",
    platform: "Xbox Cloud Gaming",
    description: "Use Xbox Cloud Gaming for supported Call of Duty experiences, including Warzone, without installing the PC client.",
    status: "cloud",
    playUrl: "https://www.xbox.com/en-us/play",
    note: "Availability and subscription requirements vary by title and region.",
    actionLabel: "Play in browser",
    browserPlayable: true,
  },
  {
    slug: "apex-legends",
    name: "Apex Legends",
    platform: "GeForce NOW",
    description: "Apex Legends can be launched as a cloud session through GeForce NOW's supported browser experience instead of sending players to the EA download page.",
    status: "cloud",
    playUrl: "https://play.geforcenow.com/",
    note: "GeForce NOW availability, account requirements and regional support can vary. EA account/platform linking may be required.",
    actionLabel: "Play in browser",
    browserPlayable: true,
  },
  {
    slug: "cod-mobile",
    name: "Call of Duty: Mobile",
    platform: "Official mobile app",
    description: "The mobile Call of Duty experience for supported Android and iOS devices.",
    status: "official",
    playUrl: "https://www.callofduty.com/mobile",
    note: "There is no supported official ShadowPlay browser-streaming session, so this button opens the official mobile experience instead of falsely promising cloud play.",
    actionLabel: "Open official mobile page",
    browserPlayable: false,
  },
  {
    slug: "free-fire",
    name: "Free Fire",
    platform: "Official mobile app",
    description: "Garena's mobile battle royale experience with an official mobile launch path.",
    status: "official",
    playUrl: "https://ff.garena.com/",
    note: "There is no supported official ShadowPlay browser-streaming session, so this button opens the official game page instead of a misleading download or fake stream.",
    actionLabel: "Open official game page",
    browserPlayable: false,
  },
  {
    slug: "playstation",
    name: "PlayStation Games",
    platform: "PlayStation Remote Play",
    description: "A dedicated entry point for users who want to play supported PlayStation games remotely from their own console.",
    status: "official",
    playUrl: "https://www.playstation.com/remote-play/",
    note: "Remote Play uses your own compatible PlayStation console and supported device setup; it is not a ShadowPlay-hosted cloud session.",
    actionLabel: "Set up Remote Play",
    browserPlayable: false,
  },
];

export const featuredGame = games[0];
