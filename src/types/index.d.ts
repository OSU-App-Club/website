// import { User } from "@prisma/client"

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};
export type MenuItem = NavItem & {
  description?: string;
  launched?: boolean;
  external?: boolean;
};

export interface RoadmapCardItem {
  title: string;
  description: string;
  available: boolean;
  href: string;
}

export interface TeamCardItem {
  name: string;
  role: string;
  image: string;
  other?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  biography?: string;
}

export type ProjectCardItem = {
  title: string;
  description: string;
  href: string;
  github?: string;
  live?: string;
  images: string[];
  video: string;
  tags?: string[];
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: MenuItem[];
    }
);

export type SiteConfig = {
  displayName: string;
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    ideal_logic: string;
    discord: string;
    old_website: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type NavMenuConfig = {
  infosNav: SidebarNavItem[];
  links: MenuItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

// export type UserSubscriptionPlan = SubscriptionPlan &
//   Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
//     stripeCurrentPeriodEnd: number
//     isPro: boolean
//   }
