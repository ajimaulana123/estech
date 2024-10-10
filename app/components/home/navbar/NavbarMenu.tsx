import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import NavbarService from "./NavbarService"
import NavbarAbout from "./NavbarAbout"
import NavbarWork from "./NavbarWork"
import NavbarContact from "./NavbarContact"

const NavbarMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavbarService />
        <NavbarAbout />
        <NavbarWork />
        <NavbarContact />
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavbarMenu;
