import ExternalLinkOpener from "components/logic/ExternalLinkOpener";
import Image from "next/image";

interface ProjectBoxProps {
  title: string;
  image: string;
  summary: string;
}

const ProjectBox = ({ title, image, summary }: ProjectBoxProps) => {
  return (
    <ExternalLinkOpener href="https://google.com">
      <div className="flex flex-col gap-5 p-2 rounded-md bg-lightSecondary dark:bg-darkSecondary h-full lg:flex-row">
        <div className="flex flex-col h-2/4 justify-center items-center md:justify-normal lg:w-2/4">
          <Image alt="Project Image" src={image} width={500} height={500} />
        </div>
        <div className="flex flex-col gap-2 h-2/4 h-full pr-2 lg:w-2/4">
          <div>
            <h1 className="text-2xl border-b-2 border-sky-100 text-center text-cyan-500">
              {title}
            </h1>
          </div>
          <div className="text-wrap break-words">{summary}</div>
        </div>
      </div>
    </ExternalLinkOpener>
  );
};

export default ProjectBox;
