import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Directory",
      items: [
        {
          title: "What We Do",
          href: "/#what-we-do",
          description: "What our club is all about.",
        },
        {
          title: "Past Projects",
          href: "/#past-projects",
          description: "Projects are the heart of our club.",
        },
        {
          title: "Join",
          href: "/#join",
          description: "Want to join? Here's how.",
        },
      ],
    },
  ],

  links: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Sponsor",
      href: "/sponsor",
    },
  ],
};
