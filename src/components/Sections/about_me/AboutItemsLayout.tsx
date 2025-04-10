import SectionHeadings from "components/ui/SectionHeadings";
import ImageLayout from "./ImageLayout";
import ParagraphText from "components/ui/ParagraphText";
import FontText from "components/ui/FontText";

const AboutItemsLayout = () => {
  return (
    <>
      <div className="md:col-start-2 md:max-h-0">
        <SectionHeadings subHeader="Introduction" sectionHeader="About me" />
      </div>
      <ImageLayout />
      <div>
        <ParagraphText>
          <FontText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed aliquam ex. Praesent tempor erat sit amet porta interdum. Proin
            lobortis consequat efficitur. Fusce hendrerit sem eget enim sodales
            feugiat. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </FontText>
          <FontText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed aliquam ex. Praesent tempor erat sit amet porta interdum. Proin
            lobortis consequat efficitur. Fusce hendrerit sem eget enim sodales
            feugiat. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus.
          </FontText>
        </ParagraphText>
      </div>
    </>
  );
};

export default AboutItemsLayout;
