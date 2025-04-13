import SectionHeadings from "components/ui/SectionHeadings";
import ProjectSectionLayout from "./ProjectSectionLayout";
import ProjectLayout from "./ProjectLayout";

const ProjectItems = () => {
  return (
    <ProjectSectionLayout>
      <SectionHeadings subHeader="What I've done" sectionHeader="Projects" />
      <ProjectLayout />
    </ProjectSectionLayout>
  );
};

export default ProjectItems;
