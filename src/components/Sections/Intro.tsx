import SmallSubudedText from "components/ui/SmallSubduedText";
import { useTranslations } from "next-intl";
import RoundedIconButton from "components/ui/RoundedIconButton";
import Downloader from "components/logic/Downloader";
import JustifiedText from "components/ui/JustifiedText";
import FontText from "components/ui/FontText";

const Intro = () => {
  const t = useTranslations("Name");
  return (
    <div className="flex flex-col gap-2">
      {/* TODO grab more than just name from T */}
      <h1 className="text-4xl text-center">Hi, I'm {t("my_name")}!</h1>
      <SmallSubudedText text="Fullstack JavaScript Developer" />
      <JustifiedText>
        <FontText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </FontText>
      </JustifiedText>
      <div className="mt-5 flex flex-row">
        <Downloader filePath="/cv/Pontus Grandin CV.pdf">
          <RoundedIconButton
            text="CV"
            lightIcon="download-white.svg"
            darkIcon="download.svg"
          />
        </Downloader>
      </div>
    </div>
  );
};

export default Intro;
