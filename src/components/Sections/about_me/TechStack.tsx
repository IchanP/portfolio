import { useTranslations } from "next-intl";
import TechStackFetcher from "./TechStackFetcher";

const TechStack = () => {
  const t = useTranslations("About Me");
  return (
    <>
      <p className="font-ovo text-center text-lg opacity-80">{t("Tools")}</p>
      <div className="flex flex-row flex-wrap justify-center gap-5 mt-5 md:mt-0">
        <TechStackFetcher />
      </div>
    </>
  );
};

export default TechStack;
