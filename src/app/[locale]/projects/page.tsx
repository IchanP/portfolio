import ProjectBox from "components/ui/ProjectBox";
import SquareBlurb from "components/ui/SquareBlurb";

const ProjectsPage = () => {
  const randomArray = [1, 2, 3];
  return (
    <div className="grid grid-rows-[50px_1fr] text-center gap-5 justify-center items-center pb-10">
      <div>
        <h1 className="text-3xl font-courier-prime">Personal Projects</h1>
      </div>
      <div className="overflow-hidden flex flex-col flex-wrap gap-5 max-w-full lg:flex-row lg:justify-center">
        {randomArray.map((value) => (
          <SquareBlurb>
            <ProjectBox
              title="Repub"
              image="/fuckingweebkita.gif"
              summary="This is just a l11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111onger te111111111111111111111111111111111111111111111111xt to see that it works, what if i add some more like this"
            />
          </SquareBlurb>
        ))}
        <SquareBlurb>
          <ProjectBox
            title="Repub"
            image="/fuckingweebkita.gif"
            summary="This is 1xt to see that it works,111111111111 what if i add some more like this"
          />
        </SquareBlurb>
      </div>
    </div>
  );
};

export default ProjectsPage;
