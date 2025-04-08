"use client";
import React from "react";
import FontText from "components/ui/FontText";
import JustifiedText from "components/ui/JustifiedText";
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
    <h1 className="text-4xl font-ovo text-center">{intro}!</h1>
    <SmallSubudedText textColor="text-blueAccent" text={description} />
    <JustifiedText>{content}</JustifiedText>
  </>
);

const IntroductionText = () => {
  const textData = useIntroductionText();
  return <IntroductionTextRenderer {...textData} />;
};

export default IntroductionText;
