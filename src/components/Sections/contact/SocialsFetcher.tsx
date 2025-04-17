"use client";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { blue, grey, red } from "@mui/material/colors";
import SocialButton from "./SocialButton";
import { useIsDarkmode } from "stores/DarkModeState";

const ContactsFetcher = () => {
  const isDarkMode = useIsDarkmode((state) => state.isDarkMode);

  const socialLinks = [
    {
      icon: <LinkedIn sx={{ color: blue[600] }} />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/pontus-grandin",
    },
    {
      icon: <GitHub sx={{ color: isDarkMode ? grey[50] : grey[900] }} />,
      text: "GitHub",
      href: "https://github.com/IchanP",
    },
    {
      icon: <Email sx={{ color: red[800] }} />,
      text: "pontusgrandin@proton.me",
      href: "mailto:pontusgrandin@proton.me",
    },
  ];

  return (
    <>
      {socialLinks.map((link, index) => (
        <SocialButton
          key={index}
          href={link.href}
          icon={link.icon}
          text={link.text}
        />
      ))}
    </>
  );
};

export default ContactsFetcher;
