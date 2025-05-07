import { useTranslations } from "next-intl";
import CloseButton from "./CloseButton";

const ConditionalMenu = () => {
  const t = useTranslations("Name");

  return (
    <>
      <div className="shide-mflex absolute left-48 flex-scol-mrow">
        <h1 className="header-large select-none">{t("my_name")}</h1>
      </div>
      <div className="md:hidden w-full">
        <CloseButton />
      </div>
    </>
  );
};

export default ConditionalMenu;
