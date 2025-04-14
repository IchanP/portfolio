import { useTranslations } from "next-intl";
import SectionHeadings from "components/ui/SectionHeadings";

const ContactHeader = () => {
  const t = useTranslations("Contact");
  return (
    <SectionHeadings subHeader={t("SubHeader")} sectionHeader={t("Header")} />
  );
};

export default ContactHeader;
