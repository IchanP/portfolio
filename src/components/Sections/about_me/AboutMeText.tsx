import FontText from "components/ui/FontText";
import ParagraphText from "components/ui/ParagraphText";
import { useTranslations } from "next-intl";

const AboutMeText = () => {
  const t = useTranslations("About Me.Text");
  return (
    <>
      <ParagraphText>
        <FontText>{t("paragraph_1")}</FontText>
        <FontText>{t("paragraph_2")}</FontText>
      </ParagraphText>
    </>
  );
};

export default AboutMeText;
