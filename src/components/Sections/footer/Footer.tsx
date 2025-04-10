import { useTranslations } from "next-intl";
import SmallSubudedText from "../../ui/SmallSubduedText";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const t = useTranslations("Name");
  const copyRight = `© ${currentYear} ${t("my_name")}`;
  return (
    <div className="py-10 flex flex-col gap-5">
      <SmallSubudedText text={copyRight} textColor="" />
    </div>
  );
};

export default Footer;
