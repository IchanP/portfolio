import React from "react";
import classNames from "classnames";

const MenuDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={classNames(
        `h-12 border-t-2 border-[#fcf2f2] dark:border-[#0d0f14] flex flex-col justify-center items-center w-full text-center 
        bg-lightPrimary font-medium
        md:border-t-0 md:w-auto hover:font-semibold`,
      )}
    >
      {children}
    </div>
  );
};

export default MenuDiv;
