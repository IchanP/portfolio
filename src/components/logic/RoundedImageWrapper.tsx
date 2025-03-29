"use client";
import RoundedImage from "components/ui/RoundedImage";
import { ExternalIconLink } from "data/techStack";
import { useIsDarkmode } from "stores/DarkModeState";

const RoundedImgThemeWrapper = ({
  imgData,
  ratio,
}: {
  imgData: ExternalIconLink;
  ratio: string;
}) => {
  const isDarkmode = useIsDarkmode((context) => context.isDarkMode);
  const imgSrc = isDarkmode ? imgData.src.darkmode : imgData.src.lightmode;

  return (
    <>
      <RoundedImage ratio={ratio} altText={imgData.alt} src={imgSrc} />
    </>
  );
};

export default RoundedImgThemeWrapper;
