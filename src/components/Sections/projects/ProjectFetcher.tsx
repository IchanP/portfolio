import { getTranslatedProjects } from "data/projects";
import ProjectCard from "./ProjectCard";

const ProjectFetcher = () => {
  const projects = getTranslatedProjects();
  return (
    <>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </>
  );
};

export default ProjectFetcher;
