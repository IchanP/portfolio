import { useTranslations } from "next-intl";

export function getTranslatedProjects() {
  const t = useTranslations("Projects");
  return [
    {
      title: t("Repub.title"),
      summary: t("Repub.summary"),
    },
  ];
}
