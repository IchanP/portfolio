import { ReactNode } from "react";

const RoundedDiv = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-large bg-lightPrimary dark:bg-darkPrimary">
      {children}
    </div>
  );
};

export default RoundedDiv;
