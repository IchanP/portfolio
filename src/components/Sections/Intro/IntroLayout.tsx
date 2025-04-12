import React from "react";

/**
 * Responsible for the layout structure of the Introduction part of the application.
 * @param {React.ReactNode} param0 - The React components to render.
 * @returns {React.ReactNode} - TSX to be rendered.
 */
const IntroLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="grid grid-cols-1 py-[35%]
      place-items-center md:gap-10 md:py-0
      h-full md:grid-cols-2 md:col-span-2 mx-page
      gap-56"
    >
      {children}
    </div>
  );
};

export default IntroLayout;
