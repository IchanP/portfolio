"use client";
import { useState } from "react";
import LocaleToggleButton from "./logic/LocaleToggle";
import MenuDiv from "./ui/MenuDiv";
import Nav from "./Nav";
import ThemeSwitcher from "./logic/ThemeSwitcher";
import { useTranslations } from "next-intl";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Name");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // TODO this needs a full rewrite basically
  return (
    <header className="sticky top-0 md:relative flex flex-col md:flex-row md:py-5 items-center md:bg-lightPrimary md:dark:bg-darkPrimary ">
      <div className="items-center md:pl-72 w-full md:block hidden font-lexend">
        <a href="/" className="font-bold md:text-3xl">
          {t("my_name")}
        </a>
      </div>

      {/* Mobile: Hamburger Button */}
      <button
        className="md:hidden dark:bg-darkPrimary bg-lightPrimary w-full flex flex-row justify-center p-2 focus:outline-none"
        onClick={toggleMenu}
      >
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
        className={`w-full flex flex-col md:flex-row bg-lightPrimary dark:bg-darkPrimary transform transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        }`}
      >
        <div
          className={`items-center justify-end w-full ,ms md:w-auto md:flex-grow
           md:flex md:mr-5 md:ml-10 md:flex-row md:w-auto 
          ${isMenuOpen ? "flex flex-col" : "hidden"} md:block`}
        >
          <Nav />
        </div>
        <div
          className={`w-full md:w-auto flex-col md:flex-row items-center md:pr-5 md:gap-5 ${
            isMenuOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <MenuDiv hoverOnLarge={false}>
            <ThemeSwitcher />
          </MenuDiv>
          <MenuDiv hoverOnLarge={false}>
            <LocaleToggleButton />
          </MenuDiv>
        </div>
      </div>
    </header>
  );
};

export default Header;
