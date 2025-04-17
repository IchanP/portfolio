import FontText from "components/ui/FontText";
import ParagraphText from "components/ui/ParagraphText";
import { useTranslations } from "next-intl";

const AboutMeText = () => {
  const t = useTranslations("About Me.Text");
  return (
    <>
      <ParagraphText>
        <FontText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
          aliquam ex. Praesent tempor erat sit amet porta interdum. Proin
          lobortis consequat efficitur. Fusce hendrerit sem eget enim sodales
          feugiat. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </FontText>
        <FontText>{t("paragraph_2")}</FontText>
      </ParagraphText>
    </>
  );
};

export default AboutMeText;
