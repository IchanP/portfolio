import { useTranslations } from "next-intl";

export interface ProjectInfo {
  title: string;
  summary: string;
  githubUrl: string;
  figmaUrl?: string;
  imgSrc: string;
  imgAlt: string;
}

const githubPrefix = "https://github.com/IchanP";

export function getTranslatedProjects(): Array<ProjectInfo> {
  const t = useTranslations("Projects");
  return [
    {
      title: t("Portfolio.title"),
      summary: t("Portfolio.summary"),
      githubUrl: `${githubPrefix}/portfolio`,
      figmaUrl:
        "https://www.figma.com/design/9ge1bAQgbm1JbzaplJFdOS/Portfolio-Design?node-id=2027-8272&t=bZqXtX7c78zri1TQ-1",
      imgSrc: "/projects/portfolio.png",
      imgAlt:
        "Portfolio example for Pontus Grandin displaying a circular image of him with introductory text.",
    },
    {
      title: t("Weather App.title"),
      summary: t("Weather App.summary"),
      githubUrl: `${githubPrefix}/weather-app`,
      imgSrc: "/projects/weather-app.png",
      imgAlt:
        "Weather App README. Showing the requirements to run the application, Python and .NET",
    },
  ];
}
