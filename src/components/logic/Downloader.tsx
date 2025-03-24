"use client";
import { ReactNode } from "react";

const Downloader = ({
  children,
  filePath,
}: {
  children: ReactNode;
  filePath: string;
}) => {
  return (
    <a href={filePath} download={filePath.split("/").pop() || ""}>
      {children}
    </a>
  );
};

export default Downloader;
