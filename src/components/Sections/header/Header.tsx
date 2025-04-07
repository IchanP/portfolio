"use client";

import { MenuProvider } from "context/MenuContext";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header
      className="sticky top-0 md:relative flex flex-col md:flex-row md:py-5 
    items-center md:bg-lightPrimary md:dark:bg-darkPrimary z-10"
    >
      <MenuProvider>
        <Navigation />
      </MenuProvider>
    </header>
  );
};

export default Header;
