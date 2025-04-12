import { getTranslatedEducation } from "data/eudcation";
import EducationCard from "./EducationCard";
const EducationFetcher = () => {
  const educationData = getTranslatedEducation();
  return (
    <>
      {educationData.map((item) => (
        <div key={item.title}>
          <EducationCard educationData={item} />
        </div>
      ))}
    </>
  );
};

export default EducationFetcher;
