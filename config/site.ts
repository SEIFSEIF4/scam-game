export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "How to Play",
      href: "/how-to-play",
    },
    {
      label: "Order",
      href: "/order",
    },
    {
      label: "contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Rules",
      href: "/rules",
    },
    {
      label: "Order",
      href: "/order",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    instagram:
      "https://www.instagram.com/scam.cards/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw==",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
