import { useTranslations } from "next-intl";
import IconText from "./ui/IconText";

const SocialMedia = () => {
  const t = useTranslations("SocialMedia");
  // TODO: Implement social media links
  return (
    <div className="flex flex-col gap-1 items-center md:flex-row">
      <h2 className="text-l">{t("find_me")}</h2>
      <div className="flex flex-row gap-2 items-center">
        <IconText iconSource="/ln-blue-40.png" alt="LinkedIn" />
        <IconText iconSource="/ln-blue-40.png" alt="Gmail" />
        <IconText iconSource="/ln-blue-40.png" alt="GitHub" />
      </div>
    </div>
  );
};

export default SocialMedia;
