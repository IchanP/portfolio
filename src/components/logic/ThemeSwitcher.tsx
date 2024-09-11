"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-full w-full flex justify-center items-center bg-lightPrimary dark:bg-darkPrimary hover:bg-lightHover dark:hover:bg-darkHover transition-colors md:p-3 md:rounded-full md:w-auto"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <Moon className="text-yellow-500" />
      ) : (
        <Sun className="text-black-500" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
