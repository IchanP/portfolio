import React from "react";
import classNames from 'classnames';


const MenuDiv = ({ children, hoverOnLarge }: { children: React.ReactNode, hoverOnLarge: Boolean }) => {
  const hoverColors = hoverOnLarge ? "hover:bg-lightHover dark:hover:bg-darkHover" : "md:hover:bg-lightPrimary md:dark:hover:bg-darkPrimary";
  return (
    <div className={classNames("h-12 flex flex-col justify-center items-center w-full text-center bg-lightPrimary hover:bg-lightHover dark:bg-darkPrimary dark:hover:bg-darkHover md:w-auto", hoverColors)}>
      {children}
    </div>
  );
};

export default MenuDiv;
