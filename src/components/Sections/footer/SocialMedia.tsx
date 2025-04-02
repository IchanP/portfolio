"use client";
import IconText from "../../ui/IconText";
import { useIsDarkmode } from "stores/DarkModeState";
import ExternalLinkOpener from "../../logic/ExternalLinkOpener";

const SocialMedia = () => {
  const isDarkMode = useIsDarkmode((state) => state.isDarkMode);
  const githubIcon = isDarkMode ? "/github-mark-white.svg" : "/github-mark.svg";
  return (
    <div className="flex flex-col gap-1 items-center md:justify-center">
      <div className="flex flex-row gap-3 items-center">
        <ExternalLinkOpener href="https://www.linkedin.com/in/pontus-grandin-13133b312/">
          <IconText iconSource="/ln-blue-40.png" alt="LinkedIn" />
        </ExternalLinkOpener>
        <ExternalLinkOpener href="mailto:pontusgrandin@proton.me">
          <IconText iconSource="/gmail.svg" alt="Gmail" />
        </ExternalLinkOpener>
        <ExternalLinkOpener href="https://github.com/IchanP">
          <IconText iconSource={githubIcon} alt="GitHub" />
        </ExternalLinkOpener>
      </div>
    </div>
  );
};

export default SocialMedia;
