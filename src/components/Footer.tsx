import { useTranslations } from "next-intl";
import SocialMedia from "./SocialMedia";
import SmallSubudedText from "./ui/CopyRIght";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const t = useTranslations("Name");
  const copyRight = `© ${currentYear}, ${t("my_name")}`;
  return (
    <div className="py-3 flex flex-col gap-5">
      <SocialMedia />
      <SmallSubudedText text={copyRight} />
    </div>
  );
};

export default Footer;
