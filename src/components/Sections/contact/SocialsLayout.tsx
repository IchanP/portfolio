import List from "@mui/material/List";
import React from "react";

interface SocialsLAyoutProps {
  children: React.ReactNode;
}

export const SocialsLayout = ({ children }: SocialsLAyoutProps) => {
  return (
    <div>
      <List className="flex-scol-mrow gap-3">{children}</List>
    </div>
  );
};
