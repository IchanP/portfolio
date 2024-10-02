import ProjectBox from "components/ui/ProjectBox";
import SquareBlurb from "components/ui/SquareBlurb";

const ProjectsPage = () => {
  const randomArray = [1, 2];
  return (
    <div className="flex w-full flex-col gap-16 justify-center items-center">
      <div>
        <h1 className="text-3xl font-courier-prime">Personal Projects</h1>
      </div>
      <div className="px-11 flex items-stretch w-full flex-col items-center justify-center gap-5 md:flex-wrap md:flex-row">
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
