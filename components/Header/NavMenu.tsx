import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const NavMenu = () => {
  return (
    <NavigationMenu className="absolute left-1/2 -translate-x-1/2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm">
            Product
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-255 h-60"></div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-255 h-40"></div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-255 h-80"></div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle() + " text-sm"}
          >
            <Link href={"/customers"}>Customers</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle() + " text-sm"}
          >
            <Link href={"/pricing"}>Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
