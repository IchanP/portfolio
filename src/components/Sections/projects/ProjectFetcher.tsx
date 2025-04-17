import { getTranslatedProjects } from "data/projects";
import ProjectCard from "./ProjectCard";

const ProjectFetcher = () => {
  const projects = getTranslatedProjects();
  return (
    <>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </>
  );
};

export default ProjectFetcher;
