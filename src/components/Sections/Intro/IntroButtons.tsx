import React from "react";
import ButtonLink from "./ButtonLink";
import { useTranslations } from "next-intl";

/**
 * Responsible for the layout of the introduction buttons.
 * @returns {React.JSX.Element} - Returns the JSX to be rendered.
 */
const IntroButtons = () => {
  const t = useTranslations("Introduction");
  return (
    <div className="mt-5 gap-4 flex flex-row">
      {/* TODO fix this broken link */}
      <ButtonLink
        href="/cv/Pontus Grandin - CV.pdf"
        text={t("view_cv")}
        newTab={true}
      />
      <ButtonLink href="#contact" text={t("contact")} invertColor={true} />
    </div>
  );
};

export default IntroButtons;
