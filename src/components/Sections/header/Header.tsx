"use client";

import { MenuProvider } from "context/MenuContext";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="sticky top-0 md:relative md:py-5 items-center z-10">
      <MenuProvider>
        <Navigation />
      </MenuProvider>
    </header>
  );
};

export default Header;
