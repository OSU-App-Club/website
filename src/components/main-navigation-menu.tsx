import * as React from "react";

import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navMenuConfig } from "@/config/nav-menu";
import { Icons } from "@/icons";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/types";

const infos = navMenuConfig.infosNav[0];

export function MainNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{infos.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/blog"
                >
                  <Icons.beaver className="size-10" />
                  <div className="mb-2 mt-3 text-lg font-medium text-gradient_blaze-orange">
                    Blog
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    The most active OSU Computer Science blog. Includes articles
                    about our projects, events, and more.
                  </p>
                </a>
              </li>
              {infos.items?.map((info) => (
                <ListItem key={info.title} {...info} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          {navMenuConfig.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={navigationMenuTriggerStyle()}
            >
              {link.title}
            </a>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem: React.FC<MenuItem> = ({
  title,
  href,
  description,
  launched,
  disabled,
  external,
}) => {
  const target = external ? "_blank" : undefined;

  return (
    <li>
      <a
        href={disabled ? undefined : href}
        target={target}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          disabled
            ? "text-muted-foreground hover:bg-transparent hover:text-muted-foreground"
            : ""
        )}
      >
        <div className="text-sm font-medium leading-none text-gradient_blaze-orange">
          <span className="mr-2">{title}</span>
          {disabled ? (
            <Badge
              variant="secondary"
              radius="sm"
              className="h-5 px-1.5 text-xs font-medium"
            >
              SOON
            </Badge>
          ) : null}
          {launched ? (
            <Badge radius="sm" className="h-5 px-1.5 text-xs font-medium">
              NEW
            </Badge>
          ) : null}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {description}
        </p>
      </a>
    </li>
  );
};
ListItem.displayName = "ListItem";
