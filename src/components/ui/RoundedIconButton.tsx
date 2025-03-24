"use client";
import { useIsDarkmode } from "stores/DarkModeState";
import IconText from "./IconText";

const RoundedIconButton = ({
  text,
  lightIcon,
  darkIcon,
}: {
  text: string;
  lightIcon: string;
  darkIcon: string;
}) => {
  const isDarkmode = useIsDarkmode((state) => state.isDarkMode);
  const iconUrl = isDarkmode ? lightIcon : darkIcon;
  return (
    <div
      className="py-1 pb-2 px-5 flex flex-row items-center border-dashed border-2 border-black dark:border-white 
    justify-center rounded-full dark:bg-darkPrimary hover:dark:bg-darkHover hover:bg-lightHover cursor-pointer ease-in duration-100"
    >
      {iconUrl && <IconText iconSource={iconUrl} alt={text} />}
      <span className="ml-2 font-bold text-lg select-none">{text}</span>
    </div>
  );
};

export default RoundedIconButton;
