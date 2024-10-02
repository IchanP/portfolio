import ProjectBox from "components/ui/ProjectBox";
import SquareBlurb from "components/ui/SquareBlurb";
import { getTranslatedProjects } from "data/projects";

const ProjectsPage = () => {
  const projectsArray = getTranslatedProjects();
  return (
    <div className="grid w-full grid-rows-[50px_1fr] text-center gap-5 justify-center items-center pb-10">
      <div>
        <h1 className="text-3xl font-courier-prime">Personal Projects</h1>
      </div>
      <div className="overflow-hidden w-full flex flex-col flex-wrap gap-5 min-w-full lg:flex-row lg:justify-center lg:items-stretch">
        {projectsArray.map((project) => (
          <SquareBlurb key={project.title}>
            <ProjectBox
              title={project.title}
              image="/fuckingweebkita.gif"
              summary={project.summary}
            />
          </SquareBlurb>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
