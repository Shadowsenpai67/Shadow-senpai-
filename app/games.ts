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
    description: "Fortnite can be streamed through Xbox Cloud Gaming in supported regions, but Nigeria is not currently a supported Xbox Cloud Gaming market.",
    status: "featured",
    playUrl: "https://www.xbox.com/play/games/fortnite-battle-royale/9p6lnn3kz75r",
    note: "Do not show this as browser-ready in Nigeria. Xbox Cloud Gaming requires a supported region and account.",
    actionLabel: "Check Xbox Cloud Gaming",
    browserPlayable: false,
  },
  {
    slug: "black-ops-7",
    name: "Call of Duty: Black Ops 7",
    platform: "Xbox Cloud Gaming",
    description: "Cloud play depends on Xbox Cloud Gaming regional support, the game entitlement and the applicable Game Pass plan.",
    status: "cloud",
    playUrl: "https://www.xbox.com/play",
    note: "Nigeria is not currently listed as an Xbox Cloud Gaming market, so this is not presented as a working Nigerian browser stream.",
    actionLabel: "Check Xbox Cloud Gaming",
    browserPlayable: false,
  },
  {
    slug: "call-of-duty",
    name: "Call of Duty / Warzone",
    platform: "Xbox Cloud Gaming",
    description: "Supported Call of Duty experiences can be streamed through Xbox Cloud Gaming where the service is available.",
    status: "cloud",
    playUrl: "https://www.xbox.com/play",
    note: "Nigeria is not currently listed as an Xbox Cloud Gaming market, so this route is marked region-limited rather than falsely playable.",
    actionLabel: "Check Xbox Cloud Gaming",
    browserPlayable: false,
  },
  {
    slug: "apex-legends",
    name: "Apex Legends",
    platform: "airgpu Cloud PC · Africa (Cape Town)",
    description: "For Nigeria, the better fit is a cloud PC with an African data-center option rather than GeForce NOW. airgpu provides GPU cloud PCs and lists Cape Town among its African locations.",
    status: "cloud",
    playUrl: "https://airgpu.com/",
    note: "Apex is available on airgpu according to current cloud-gaming catalogues. You create a cloud PC, install Apex through an official PC launcher, then stream it using Parsec or Moonlight. Availability and anti-cheat compatibility can change.",
    actionLabel: "Launch airgpu",
    browserPlayable: false,
  },
  {
    slug: "cod-mobile",
    name: "Call of Duty: Mobile",
    platform: "Official mobile app",
    description: "The official mobile Call of Duty experience for supported Android and iOS devices.",
    status: "official",
    playUrl: "https://www.callofduty.com/mobile",
    note: "There is no official ShadowPlay browser-streaming session for COD Mobile, so we do not pretend this is cloud playable.",
    actionLabel: "Open official mobile page",
    browserPlayable: false,
  },
  {
    slug: "free-fire",
    name: "Free Fire",
    platform: "Official mobile app",
    description: "Garena's official mobile battle royale experience.",
    status: "official",
    playUrl: "https://ff.garena.com/",
    note: "There is no supported official ShadowPlay browser-streaming session, so this opens the official game page instead of a fake stream.",
    actionLabel: "Open official game page",
    browserPlayable: false,
  },
  {
    slug: "playstation",
    name: "PlayStation Games",
    platform: "PlayStation Remote Play",
    description: "Play supported PlayStation games remotely from your own compatible console.",
    status: "official",
    playUrl: "https://www.playstation.com/remote-play/",
    note: "Remote Play uses your own PlayStation console; it is not a ShadowPlay-hosted cloud session.",
    actionLabel: "Set up Remote Play",
    browserPlayable: false,
  },
];

export const featuredGame = games[0];
