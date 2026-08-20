import type { ReactNode } from "react";

export type LinkItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

export const links: LinkItem[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/observatorioestelar",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+556892324004?text=teste",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 3a9 9 0 0 0-7.75 13.53L3 21l4.6-1.21A9 9 0 1 0 12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M8.6 8.3c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.8 1.7.1.1.1.3 0 .5-.1.2-.2.3-.3.4-.2.2-.3.3-.1.6.4.7.9 1.3 1.5 1.8.6.5 1.1.7 1.3.8.2.1.4.1.5-.1.2-.2.6-.7.8-.9.2-.2.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.3.1.4.3.1.2.1.9-.2 1.4-.3.6-1.5 1.1-2.1 1.1-.5 0-1.9-.1-3.6-1.4-2.1-1.6-3.4-3.8-3.5-4-.1-.2-.9-1.2-.9-2.3 0-1 .5-1.6.7-1.8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];
