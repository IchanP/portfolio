import React from "react";

/**
 * Responsible for the layout structure of the Introduction part of the application.
 * @param {React.ReactNode} param0 - The React components to render.
 * @returns {React.ReactNode} - TSX to be rendered.
 */
const IntroLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="grid grid-cols-1
     place-items-center md:mt-[-10%] mt-5 md:gap-10 
    h-screen md:grid-cols-2 md:col-span-2 w-full
    gap-[0rem]
    "
    >
      {children}
    </div>
  );
};

export default IntroLayout;
