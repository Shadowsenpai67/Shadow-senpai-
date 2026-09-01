import type { ReactNode, SVGProps } from "react";

type IconName =
  | "play"
  | "gamepad"
  | "cloud"
  | "zap"
  | "chart"
  | "users"
  | "target"
  | "star"
  | "globe"
  | "wifi"
  | "arrow-right"
  | "arrow-left"
  | "chevron-down"
  | "check";

const paths: Record<IconName, ReactNode> = {
  play: <path d="M8 5.5v13l10-6.5-10-6.5Z" fill="currentColor" stroke="none" />,
  gamepad: <><path d="m7.2 8.2-1.1 7.1a2.7 2.7 0 0 0 4.8 2.1l1.1-1.4h4l1.1 1.4a2.7 2.7 0 0 0 4.8-2.1l-1.1-7.1A4 4 0 0 0 16.8 5H7.2a4 4 0 0 0-4 3.2Z" /><path d="M8 10v4M6 12h4M16.5 11.5h.01M19 14h.01" /></>,
  cloud: <path d="M7 18h11a4 4 0 0 0 .6-8A6 6 0 0 0 7 8.5 4.5 4.5 0 0 0 7 18Z" />,
  zap: <path d="m13 2-8 11h6l-1 9 8-12h-6l1-8Z" />,
  chart: <><path d="M4 19V5M4 19h16" /><path d="m7 15 4-5 3 2 5-6" /></>,
  users: <><path d="M16 20v-1.5a4.5 4.5 0 0 0-4.5-4.5h-3A4.5 4.5 0 0 0 4 18.5V20" /><circle cx="10" cy="7" r="3" /><path d="M16 8a3 3 0 0 1 0 5M20 20v-1.5a4.5 4.5 0 0 0-3-4.2" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></>,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  wifi: <><path d="M3 8.5a14 14 0 0 1 18 0M6 12a9.5 9.5 0 0 1 12 0M9 15.5a5 5 0 0 1 6 0" /><path d="M12 19h.01" strokeWidth="2.5" /></>,
  "arrow-right": <><path d="M4 12h15" /><path d="m14 6 6 6-6 6" /></>,
  "arrow-left": <><path d="M20 12H5" /><path d="m10 6-6 6 6 6" /></>,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  check: <path d="m5 12 4 4L19 6" />,
};

export function Icon({ name, size = 20, strokeWidth = 1.8, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      {paths[name]}
    </svg>
  );
}
