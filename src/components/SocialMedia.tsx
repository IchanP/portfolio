"use client";
import { useTranslations } from "next-intl";
import IconText from "./ui/IconText";
import { useIsDarkmode } from "stores/DarkModeState";

const SocialMedia = () => {
  const t = useTranslations("SocialMedia");
  const isDarkMode = useIsDarkmode((state) => state.isDarkMode);
  console.log(isDarkMode);
  // TODO: Implement social media links
  return (
    <div className="flex flex-col gap-1 items-center md:flex-row md:justify-center">
      <h2 className="text-l md:pr-3">{t("find_me")}</h2>
      <div className="flex flex-row gap-2 items-center">
        <IconText iconSource="/ln-blue-40.png" alt="LinkedIn" />
        <IconText iconSource="/gmail.svg" alt="Gmail" />
        <IconText iconSource="/ln-blue-40.png" alt="GitHub" />
      </div>
    </div>
  );
};

export default SocialMedia;
