import SectionHeadings from "components/ui/SectionHeadings";
import { useTranslations } from "next-intl";

const AboutMeHeader = () => {
  const t = useTranslations("About Me");
  return (
    <div className="md:col-start-2">
      <SectionHeadings subHeader={t("SubHeader")} sectionHeader={t("Header")} />
    </div>
  );
};

export default AboutMeHeader;
