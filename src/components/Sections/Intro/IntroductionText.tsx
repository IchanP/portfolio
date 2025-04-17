"use client";
import React from "react";
import FontText from "components/ui/FontText";
import ParagraphText from "components/ui/ParagraphText";
import SmallSubudedText from "components/ui/SmallSubduedText";
import { useTranslations } from "next-intl";

/**
 * Responsible for fetching the introductory text.
 * @returns {Object} - The fetched text data.
 */
const useIntroductionText = () => {
  const tName = useTranslations("Name");
  const tIntro = useTranslations("Introduction");
  return {
    intro: tIntro("present") + tName("my_name"),
    description: tIntro("job_title"),
    content: <FontText>{tIntro("introductory_text")}</FontText>,
  };
};

interface IntroductionTextProps {
  intro: string;
  description: string;
  content: React.JSX.Element;
}

/**
 * Responsible for rendering the introductory text.
 * @param {Object} props - The text data to be rendered.
 * @returns {React.ReactNode} - Tsx to be rendered.
 */
const IntroductionTextRenderer = ({
  intro,
  description,
  content,
}: IntroductionTextProps) => (
  <>
    <h2 className="header-text">{intro}!</h2>
    <SmallSubudedText
      textColor="text-blueAccent dark:text-darkblueAccent"
      text={description}
    />
    <div className="text-center md:text-left">
      <ParagraphText>{content}</ParagraphText>
    </div>
  </>
);

const IntroductionText = () => {
  const textData = useIntroductionText();
  return <IntroductionTextRenderer {...textData} />;
};

export default IntroductionText;
