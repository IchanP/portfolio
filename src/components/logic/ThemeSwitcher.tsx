"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useIsDarkmode } from "stores/DarkModeState";

const dark = "dark";
const light = "light";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const setIsDarkmode = useIsDarkmode((state) => state.setIsDarkmode);
  useEffect(() => {
    setMounted(true);

    if (resolvedTheme) {
      setIsDarkmode(resolvedTheme === dark);
    }
  }, [resolvedTheme, setIsDarkmode]);

  if (!mounted) {
    return null;
  }

  const handleThemeSwitch = () => {
    setIsDarkmode(resolvedTheme === dark);
    setTheme(resolvedTheme === dark ? light : dark);
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className="h-full w-full flex justify-center items-center bg-lightPrimary dark:bg-darkPrimary hover:bg-lightHover dark:hover:bg-darkHover transition-colors md:p-3 md:rounded-full md:w-auto"
      aria-label="Toggle Dark Mode"
    >
      {theme === dark ? (
        <Moon className="text-yellow-500" />
      ) : (
        <Sun className="text-black-500" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
