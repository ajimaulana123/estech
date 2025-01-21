import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const NavbarService = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base md:text-sm">Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <li className="row-span-3">
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <div className="mb-2 mt-4 text-lg font-medium">
                    Layanan Kami
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Jelajahi berbagai layanan profesional kami yang disesuaikan untuk memenuhi kebutuhan Anda.
                  </p>
                </Link>
              </li>
              <ListItem href="/services/web-development" title="Pengembangan Web">
                Situs web dan aplikasi web kustom
              </ListItem>
              <ListItem href="/services/migration" title="Migrasi ke JS/TS">
                Transisi mulus dari bahasa lain ke JavaScript atau TypeScript
              </ListItem>
              <ListItem href="/services/maintenance" title="Pemeliharaan JS/TS">
                Dukungan berkelanjutan dan pemeliharaan sistem untuk proyek JavaScript dan TypeScript
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href || '/'}
        ref={ref as any}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavbarService;
