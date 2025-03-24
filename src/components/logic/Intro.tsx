import SmallSubudedText from "components/ui/CopyRIght";
import { useTranslations } from "next-intl";
import ClientSideIconWrapper from "./ClientSideIconWrapper";

const Intro = () => {
  const t = useTranslations("Name");
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl text-center">Hi, I'm {t("my_name")}!</h1>
      <SmallSubudedText text="Fullstack JavaScript Developer" />
      {/* TODO maybe make a generic <p> component? */}
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="flex flex-row">
        <ClientSideIconWrapper
          text="CV"
          lightIcon="download-white.svg"
          darkIcon="download.svg"
        />
      </div>
    </div>
  );
};

export default Intro;
