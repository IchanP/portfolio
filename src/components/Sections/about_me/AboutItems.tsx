import SectionHeadings from "components/ui/SectionHeadings";
import ImageLayout from "./ImageLayout";
import AboutMeText from "./AboutMeText";
import EducationLayout from "./EducationLayout";
import TechStackLayout from "./TechStackLayout";
import TechStack from "./TechStack";

const AboutItems = () => {
  return (
    <>
      <div className="md:col-start-2">
        <SectionHeadings subHeader="Introduction" sectionHeader="About me" />
      </div>
      <ImageLayout />
      <AboutMeText />
      <div className="md:col-span-2 md:mx-auto">
        <EducationLayout />
      </div>
      <div className="md:col-span-2">
        <TechStackLayout>
          <TechStack />
        </TechStackLayout>
      </div>
    </>
  );
};

export default AboutItems;
