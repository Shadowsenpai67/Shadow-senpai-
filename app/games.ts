export type Game = {
  slug: string;
  name: string;
  platform: string;
  description: string;
  status: "featured" | "cloud" | "official";
  playUrl: string;
  note: string;
};

export const games: Game[] = [
  { slug: "fortnite", name: "Fortnite", platform: "Xbox Cloud Gaming", description: "The flagship ShadowPlay experience. Launch the real Fortnite session in your supported browser.", status: "featured", playUrl: "https://www.xbox.com/play/games/fortnite-battle-royale/9p6lnn3kz75r", note: "Free with a Microsoft account in supported regions." },
  { slug: "black-ops-7", name: "Call of Duty: Black Ops 7", platform: "Xbox Cloud Gaming", description: "Stream the current Black Ops experience through Xbox Cloud Gaming when available for your account and region.", status: "cloud", playUrl: "https://www.xbox.com/en-us/play", note: "Game Pass or purchase requirements may apply." },
  { slug: "call-of-duty", name: "Call of Duty", platform: "Xbox Cloud Gaming", description: "Use the official Xbox cloud gateway for supported Call of Duty experiences, including Warzone.", status: "cloud", playUrl: "https://www.xbox.com/en-us/play", note: "Availability varies by title, plan and region." },
  { slug: "apex-legends", name: "Apex Legends", platform: "Official platform", description: "A fast free-to-play battle royale available through its official supported platforms.", status: "official", playUrl: "https://www.ea.com/games/apex-legends", note: "ShadowPlay links to the official Apex experience rather than pretending to host the game." },
  { slug: "cod-mobile", name: "Call of Duty: Mobile", platform: "Mobile", description: "The mobile Call of Duty experience for supported Android and iOS devices.", status: "official", playUrl: "https://www.callofduty.com/mobile", note: "Mobile gameplay is handled by the official app/platform." },
  { slug: "free-fire", name: "Free Fire", platform: "Mobile", description: "Garena's mobile battle royale experience with an official mobile launch path.", status: "official", playUrl: "https://ff.garena.com/", note: "ShadowPlay does not host or reproduce the mobile game client." },
  { slug: "playstation", name: "PlayStation Games", platform: "PlayStation Remote Play", description: "A dedicated entry point for users who want to play supported PlayStation games remotely from their own console.", status: "official", playUrl: "https://www.playstation.com/remote-play/", note: "Requires a compatible PlayStation console, account, device and network setup." },
];

export const featuredGame = games[0];
