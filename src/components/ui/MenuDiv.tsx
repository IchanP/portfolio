import React from "react";
import classNames from "classnames";

const MenuDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={classNames(
        `top-bordered h-12 flex flex-col w-full text-center 
         font-medium md:border-t-0 md:w-auto hover:font-semibold`,
      )}
    >
      {children}
    </div>
  );
};

export default MenuDiv;
