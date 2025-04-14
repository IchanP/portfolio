import SectionHeadings from "components/ui/SectionHeadings";
import { useTranslations } from "next-intl";

const ProjectHeader = () => {
  const t = useTranslations("Projects");
  return (
    <>
      <SectionHeadings subHeader={t("SubHeader")} sectionHeader={t("Header")} />
    </>
  );
};

export default ProjectHeader;
