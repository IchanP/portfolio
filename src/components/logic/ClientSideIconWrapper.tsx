"use client";
import RoundedIconButton from "components/ui/RoundedIconButton";
import { useIsDarkmode } from "stores/DarkModeState";

const ClientSideIconWrapper = ({
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

  return <RoundedIconButton iconUrl={iconUrl} text={text} />;
};

export default ClientSideIconWrapper;
