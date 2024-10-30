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
      label: "Aktueller Newsletter",
      href: "/current",
    },
    {
      label: "Archiv",
      href: "/archive",
    },
  ],
};
