import { ListItemIcon } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import React from "react";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const SocialButton = ({ href, icon, text }: SocialButtonProps) => {
  return (
    <ListItem
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: "inherit",
        width: "100%",
      }}
      className="md:saturate-[0.25] dark:hover:saturate-100 hover:saturate-100 gap-3 ease-200"
    >
      <ListItemIcon style={{ minWidth: 0 }}>{icon}</ListItemIcon>
      <p className="font-outfit font-light" style={{ marginLeft: "8px" }}>
        {text}
      </p>
    </ListItem>
  );
};

export default SocialButton;
