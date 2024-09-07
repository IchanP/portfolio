"use client";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const LocaleToggleButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentLocale = pathname.startsWith("/en") ? "en" : "se";
  const toggleLocale = currentLocale === "en" ? "se" : "en";
  const SE = getUnicodeFlagIcon("SE");
  const GB = getUnicodeFlagIcon("GB");
  const changeLocale = () => {
    // Rebuild the URL with the new locale and query params (if any)
    const newPath = `/${toggleLocale}${pathname.replace(`/${currentLocale}`, "")}`;
    const params = searchParams.toString();
    router.push(params ? `${newPath}?${params}` : newPath);
  };

  return (
    <button onClick={changeLocale} className="text-3xl h-full w-full">
      {toggleLocale.toUpperCase() === "EN" ? SE : GB}
    </button>
  );
};

export default LocaleToggleButton;
