import { useTranslations } from "next-intl";
import CloseButton from "./CloseButton";

const ConditionalMenu = () => {
  const t = useTranslations("Name");

  return (
    <>
      <div className="hidden md:flex md:flex-row absolute left-48">
        <h1 className="font-ovo text-3xl">{t("my_name")}</h1>
      </div>
      <div className="md:hidden w-full">
        <CloseButton />
      </div>
    </>
  );
};

export default ConditionalMenu;
