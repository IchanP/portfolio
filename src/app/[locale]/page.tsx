// TODO break out into child components to remove use client
"use client";
import SmallSubudedText from "components/ui/CopyRIght";
import RoundedIconButton from "components/ui/RoundedIconButton";
import { useTranslations } from "next-intl";
import { useIsDarkmode } from "stores/DarkModeState";

export default function Home() {
  const t = useTranslations("HomePage");
  const tn = useTranslations("Name");
  const isDarkmode = useIsDarkmode((state) => state.isDarkMode);
  const downloadIcon = isDarkmode ? "/download-white.svg" : "/download.svg";
  return (
    <div className="grid grid-rows-[1fr_0.5fr] pt-5 gap-5 ml-5 mr-5 md:grid-rows-0 md:grid-cols-2 md:ml-20">
      {/* TODO break this out into a smaller component */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl text-center">Hi, I'm {tn("my_name")}!</h1>
        <SmallSubudedText text="Fullstack JavaScript Developer" />
        <div>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="flex flex-row">
            <RoundedIconButton iconUrl={downloadIcon} text="CV" />
          </div>
        </div>
      </div>
    </div>
  );
}
