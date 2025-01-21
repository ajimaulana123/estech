import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import NavbarService from "./NavbarService"
import NavbarAbout from "./NavbarAbout"
import NavbarWork from "./NavbarWork"
import NavbarContact from "./NavbarContact"

interface NavbarMenuProps {
  className?: string;
  onNavigate?: () => void;
}

const NavbarMenu = ({ className, onNavigate }: NavbarMenuProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    {
      id: 'services',
      title: 'Services',
      items: [
        { 
          href: '/', 
          label: 'Layanan Kami',
          description: 'Jelajahi berbagai layanan profesional kami yang disesuaikan untuk memenuhi kebutuhan Anda.'
        },
        { href: '/services/web-development', label: 'Pengembangan Web', description: 'Situs web dan aplikasi web kustom' },
        { href: '/services/migration', label: 'Migrasi ke JS/TS', description: 'Transisi mulus dari bahasa lain ke JavaScript atau TypeScript' },
        { href: '/services/maintenance', label: 'Pemeliharaan JS/TS', description: 'Dukungan berkelanjutan dan pemeliharaan sistem' }
      ]
    },
    {
      id: 'about',
      title: 'About',
      items: [
        { 
          href: '/about', 
          label: 'Tentang Kami',
          description: 'Pelajari lebih lanjut tentang perusahaan, misi, dan nilai-nilai kami.'
        },
        { href: '/tentang-kami', label: 'Tentang Kami', description: 'Pelajari lebih lanjut tentang jasa yang kami tawarkan' },
        { href: '/tim-kami', label: 'Tim Kami', description: 'Kami sedang membangun tim yang luar biasa' },
        { href: '/testimoni', label: 'Testimoni', description: 'Apa kata klien tentang layanan kami' }
      ]
    },
    {
      id: 'work',
      title: 'Work',
      items: [
        { 
          href: '/work', 
          label: 'Portfolio',
          description: 'Lihat koleksi proyek dan karya terbaik kami'
        },
        { href: '/case-studies', label: 'Case Studies', description: 'Eksplorasi studi kasus proyek sukses kami' }
      ]
    },
    {
      id: 'contact',
      title: 'Contact',
      items: [
        { 
          href: '/contact', 
          label: 'Kontak Kami',
          description: 'Hubungi kami untuk konsultasi dan informasi lebih lanjut'
        }
      ]
    }
  ];

  const toggleMenu = (menuId: string) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  // For mobile view
  if (className?.includes('flex-col')) {
    return (
      <div className={className}>
        <div className="flex flex-col space-y-2">
          {menuItems.map((menu) => (
            <div key={menu.id} className="relative">
              <button
                onClick={() => toggleMenu(menu.id)}
                className="flex items-center justify-between w-full p-2 text-left hover:text-primary transition-colors"
              >
                <span>{menu.title}</span>
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    activeMenu === menu.id && "rotate-180"
                  )}
                />
              </button>
              {activeMenu === menu.id && (
                <div className="pl-4 py-2 space-y-2">
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onNavigate}
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For desktop view
  return (
    <div className={className}>
      <NavigationMenu className="w-full static md:relative">
        <NavigationMenuList className="flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <NavbarService />
          <NavbarAbout />
          <NavbarWork />
          <NavbarContact />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavbarMenu;
