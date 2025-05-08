import ImageLayout from "./ImageLayout";
import AboutMeText from "./AboutMeText";
import EducationLayout from "./EducationLayout";
import TechStackLayout from "./TechStackLayout";
import TechStack from "./TechStack";
import AboutMeHeader from "./AboutMeHeader";

const AboutItems = () => {
  return (
    <>
      <AboutMeHeader />
      <ImageLayout />
      <AboutMeText />
      <div className="md:col-span-2 md:mx-auto">
        <EducationLayout />
      </div>
      <div className="md:col-span-2 md:mx-auto">
        <TechStackLayout>
          <TechStack />
        </TechStackLayout>
      </div>
    </>
  );
};

export default AboutItems;
