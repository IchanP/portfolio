"use client";
import { useState } from "react";
import LocaleToggleButton from "./LocaleToggle";
import MenuDiv from "./ui/MenuDiv";
import Nav from "./Nav";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col md:flex-row items-center justify-between bg-lightPrimary dark:bg-darkPrimary">
      {/* Mobile: Hamburger Button */}
      <button className="md:hidden p-2 focus:outline-none" onClick={toggleMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <div
        className={`items-center justify-center w-full md:w-auto md:flex-grow md:flex md:flex-row md:w-auto ${
          isMenuOpen ? "flex flex-col" : "hidden"
        } md:block`}
      >
        <Nav />
      </div>

      <div
        className={`w-full md:w-auto flex-col md:flex-row items-center md:pl-3 md:gap-5 md:mr-5 ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <MenuDiv>
          <ThemeSwitcher />
        </MenuDiv>
        <MenuDiv>
          <LocaleToggleButton />
        </MenuDiv>
      </div>
    </header>
  );
};

export default Header;
