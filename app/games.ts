export type Game = {
  slug: string;
  name: string;
  platform: string;
  description: string;
  status: "featured" | "cloud" | "official" | "free-browser";
  playUrl: string;
  note: string;
  actionLabel: string;
  browserPlayable: boolean;
  freeInNigeria: boolean;
};

export const games: Game[] = [
  {
    slug: "fortnite",
    name: "Fortnite",
    platform: "Xbox Cloud Gaming",
    description: "Fortnite is a free-to-play game, but Xbox Cloud Gaming still requires a supported region. Nigeria is not currently a supported Xbox Cloud Gaming market.",
    status: "featured",
    playUrl: "https://www.xbox.com/play/games/fortnite-battle-royale/9p6lnn3kz75r",
    note: "Free game does not mean free cloud streaming. This is not presented as browser-playable from Nigeria.",
    actionLabel: "Check Xbox Cloud Gaming",
    browserPlayable: false,
    freeInNigeria: false,
  },
  {
    slug: "black-ops-7",
    name: "Call of Duty: Black Ops 7",
    platform: "Xbox Cloud Gaming",
    description: "Black Ops 7 can only be streamed where Xbox Cloud Gaming supports the game, account and region, with the required entitlement or Game Pass plan.",
    status: "cloud",
    playUrl: "https://www.xbox.com/play",
    note: "Not a free Nigerian browser stream. Xbox says cloud availability varies by region, plan and platform.",
    actionLabel: "Check Xbox Cloud Gaming",
    browserPlayable: false,
    freeInNigeria: false,
  },
  {
    slug: "call-of-duty",
    name: "Call of Duty / Warzone",
    platform: "Xbox Cloud Gaming",
    description: "Supported Call of Duty experiences can be streamed through Xbox Cloud Gaming where the service and title are available.",
    status: "cloud",
    playUrl: "https://www.xbox.com/play",
    note: "Warzone is free-to-play, but cloud streaming still depends on Xbox regional support. This is not presented as a free Nigerian browser stream.",
    actionLabel: "Check Xbox Cloud Gaming",
    browserPlayable: false,
    freeInNigeria: false,
  },
  {
    slug: "apex-legends",
    name: "Apex Legends",
    platform: "Cloud PC · Africa (Cape Town)",
    description: "Apex is free-to-play, but a cloud PC is not free. airgpu is a practical African-region cloud-PC route and can be used to install Apex through an official PC launcher, subject to availability and anti-cheat compatibility.",
    status: "cloud",
    playUrl: "https://airgpu.com/",
    note: "This is an external cloud PC, not a free ShadowPlay-hosted browser session. Do not show Apex as free or browser-ready.",
    actionLabel: "Check airgpu",
    browserPlayable: false,
    freeInNigeria: false,
  },
  {
    slug: "cod-mobile",
    name: "Call of Duty: Mobile",
    platform: "Official mobile app",
    description: "The official mobile Call of Duty experience for supported Android and iOS devices.",
    status: "official",
    playUrl: "https://www.callofduty.com/mobile",
    note: "This is not a ShadowPlay browser stream. It requires the official mobile game/app.",
    actionLabel: "Open official game page",
    browserPlayable: false,
    freeInNigeria: false,
  },
  {
    slug: "free-fire",
    name: "Free Fire",
    platform: "Official mobile app",
    description: "Garena's official mobile battle royale experience.",
    status: "official",
    playUrl: "https://ff.garena.com/",
    note: "This is not a ShadowPlay browser stream. It requires the official mobile game/app.",
    actionLabel: "Open official game page",
    browserPlayable: false,
    freeInNigeria: false,
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
    freeInNigeria: false,
  },
];

export const featuredGame = games[0];
