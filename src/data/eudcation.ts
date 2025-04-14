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
    },
    {
      title: t("AccessibilityCertificate.title"),
      subheading: t("AccessibilityCertificate.major"),
      location: t("AccessibilityCertificate.location"),
      timeframe: t("AccessibilityCertificate.timeframe"),
    },
  ];
}
