import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 425px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="w-full flex p-4 lg:p-12 justify-between flex-col items-center gap-2 lg:flex-row rounded-full fixed">
      <div className="w-full flex flex-col items-center lg:w-auto lg:items-start">
        <h1 className="text-4xl font-bold uppercase tracking-widest text-lion-800 select-none">
          Tatuseum
        </h1>
        <h3 className="text-xl text-lion-700">Art of Diorama</h3>
      </div>
      <div className="flex gap-8 text-indigo-300 text-lg font-semibold border-t-2 border-indigo-300 pt-2 lg:border-none lg:pt-0">
        {isMobile ? (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="#">Home</NavigationMenuLink>
                  <NavigationMenuLink href="#">Portfolio</NavigationMenuLink>
                  <NavigationMenuLink href="#">Process</NavigationMenuLink>
                  <NavigationMenuLink href="#">About</NavigationMenuLink>
                  <NavigationMenuLink href="#">Contact</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuIndicator />
            <NavigationMenuViewport />
          </NavigationMenu>
        ) : (
          <>
            <a>Home</a>
            <a>Portfolio</a>
            <a>Process</a>
            <a>About</a>
            <a>Contact</a>
          </>
        )}
      </div>
    </div>
  );
};
