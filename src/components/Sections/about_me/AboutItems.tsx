import SectionHeadings from "components/ui/SectionHeadings";
import ImageLayout from "./ImageLayout";
import AboutMeText from "./AboutMeText";
import EducationLayout from "./EducationLayout";

const AboutItems = () => {
  return (
    <>
      <div className="md:col-start-2 md:max-h-0 ">
        <SectionHeadings subHeader="Introduction" sectionHeader="About me" />
      </div>
      <ImageLayout />
      <AboutMeText />
      <div className="col-span-2">
        <EducationLayout />
      </div>
    </>
  );
};

export default AboutItems;
