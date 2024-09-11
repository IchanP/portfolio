import { useTranslations } from "next-intl";
import IconText from "./ui/IconText";

const SocialMedia = () => {
  const t = useTranslations("SocialMedia");
  return (
    <div className="flex flex-col gap-1 items-center md:flex-row">
      <h2 className="text-l">{t("find_me")}</h2>
      <IconText iconSource="/ln-blue-40.png" alt="LinkedIn" />
    </div>
  );
};

export default SocialMedia;
