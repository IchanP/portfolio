import { useTranslations } from "next-intl";
const currentYear = new Date().getFullYear();

const CopyRight = () => {
  const t = useTranslations("Name");
  return (
    <p className="text-sm text-center">
      © {currentYear}, {t("my_name")}
    </p>
  );
};

export default CopyRight;
