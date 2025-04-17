import { EducationCardProps } from "components/Sections/about_me/EducationCard";
import { useTranslations } from "next-intl";

export function getTranslatedEducation(): Array<EducationCardProps> {
  const t = useTranslations("About Me.Education");
  return [
    {
      title: t("University.title"),
      subheading: t("University.major"),
      location: t("University.location"),
      timeframe: t("University.timeframe"),
      href: "https://lnu.se/program/webbprogrammerare/distans-ht/",
    },
    {
      title: t("AccessibilityCertificate.title"),
      subheading: t("AccessibilityCertificate.major"),
      location: t("AccessibilityCertificate.location"),
      timeframe: t("AccessibilityCertificate.timeframe"),
      href: "https://courses.edx.org/certificates/ce857ae5d0cb4fa082dc48eee193dc42",
    },
  ];
}
