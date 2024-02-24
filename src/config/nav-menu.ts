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
          description:
            "Projects are the heart of our club. See what we've done.",
        },
        {
          title: "Our Team",
          href: "/about/#team",
          description: "Meet the leadership team and learn about our mission.",
        },
      ],
    },
  ],

  links: [
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
};
