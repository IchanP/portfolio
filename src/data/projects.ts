import { useTranslations } from "next-intl";

interface ProjectInfo {
  title: string;
  summary: string;
  url: string;
}

export function getTranslatedProjects(): Array<ProjectInfo> {
  const t = useTranslations("Projects");
  return [
    {
      title: t("Repub.title"),
      summary: t("Repub.summary"),
      url: "https://github.com/IchanP/repub",
    },
  ];
}
