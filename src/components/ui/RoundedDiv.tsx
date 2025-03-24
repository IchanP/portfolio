import { ReactNode } from "react";

const RoundedDiv = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-large lightPrimary dark:bg-darkSecondary">
      {children}
    </div>
  );
};

export default RoundedDiv;
