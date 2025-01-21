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

const NavbarAbout: React.FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base md:text-sm">About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/about"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Tentang Kami</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Pelajari lebih lanjut tentang perusahaan, misi, dan nilai-nilai kami.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/tentang-kami" title="Tentang Kami">
                Pelajari lebih lanjut tentang jasa yang kami tawarkan
              </ListItem>
              <ListItem href="/tim-kami" title="Tim Kami">
                Kami sedang membangun tim yang luar biasa
              </ListItem>
              <ListItem href="/testimoni" title="Testimoni">
                Apa kata klien tentang layanan kami
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative",
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

export default NavbarAbout;