import { useTranslations } from "next-intl";

export interface ProjectInfo {
  title: string;
  summary: string;
  githubUrl: string;
  figmaUrl?: string;
  imgSrc: string;
  imgAlt: string;
}

export function getTranslatedProjects(): Array<ProjectInfo> {
  const t = useTranslations("Projects");
  return [
    {
      title: t("Portfolio.title"),
      summary: t("Portfolio.summary"),
      githubUrl: "https://github.com/IchanP/portfolio",
      figmaUrl:
        "https://www.figma.com/design/9ge1bAQgbm1JbzaplJFdOS/Portfolio-Design?node-id=2027-8272&t=bZqXtX7c78zri1TQ-1",
      imgSrc: "/projects/portfolio.png",
      imgAlt:
        "Portfolio example for Pontus Grandin displaying a circular image of him with introductory text.",
    },
  ];
}
