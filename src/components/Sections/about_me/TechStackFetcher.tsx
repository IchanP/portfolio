import { techStack } from "data/techStack";
import TechItem from "./TechItem";
const TechStackFetcher = () => {
  return (
    <>
      {techStack.map((item) => (
        <TechItem iconInfo={item} key={item.alt} />
      ))}
    </>
  );
};

export default TechStackFetcher;
