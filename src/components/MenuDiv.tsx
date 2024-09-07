import React from "react";

const MenuDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-12 flex flex-col justify-center items-center w-full text-center bg-lightPrimary hover:bg-lightHover dark:bg-darkPrimary dark:hover:bg-darkHover">
      {children}
    </div>
  );
};

export default MenuDiv;
