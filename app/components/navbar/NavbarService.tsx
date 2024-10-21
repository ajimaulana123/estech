import React from "react";
import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const NavbarService: React.FC = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-sm p-0 data-[active]:bg-transparent data-[state=open]:bg-transparent mr-4">
        <div className="relative group">
          <span className="before:content-[''] before:w-[150%] before:h-full before:bg-lime-500 before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:-z-10 before:blur-md before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300">
            Layanan
          </span>
        </div>
      </NavigationMenuTrigger>
      <NavigationMenuContent className="">
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
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
            </NavigationMenuLink>
          </li>
          <ListItem href="/services/web-development" title="Pengembangan Web">
            Situs web dan aplikasi web kustom
          </ListItem>
          <ListItem href="/services/migration-to-js-ts" title="Migrasi ke JS/TS">
            Transisi mulus dari bahasa lain ke JavaScript atau TypeScript
          </ListItem>
          <ListItem href="/services/maintenance-js-ts" title="Pemeliharaan JS/TS">
            Dukungan berkelanjutan dan pemeliharaan sistem untuk proyek JavaScript dan TypeScript
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <NavigationMenuLink asChild>
        <Link
          href="/"
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
          <ArrowUpRight className="absolute right-2 top-2 w-4 h-4 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </NavigationMenuLink>
    );
  }
);

ListItem.displayName = "ListItem";

export default NavbarService;
