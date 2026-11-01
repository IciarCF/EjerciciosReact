import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { Link } from 'react-router';


export const CustomMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/*Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link to="/" />}
            className={navigationMenuTriggerStyle()}
          >
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/*Search */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link to="/search" />}
            className={navigationMenuTriggerStyle()}
          >
            Buscador
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
