import ExternalLinkOpener from "components/logic/ExternalLinkOpener";
import Image from "next/image";
import Link from "next/link";

interface ProjectBoxProps {
  title: string;
  image: string;
  summary: string;
}

const ProjectBox = ({ title, image, summary }: ProjectBoxProps) => {
  return (
    <ExternalLinkOpener href="https://google.com">
      <div className="flex flex-row gap-5 p-2 rounded-md bg-lightSecondary dark:bg-darkSecondary h-full">
        <div className="flex flex-col w-2/4 justify-center items-center">
          <Image alt="Project Image" src={image} width={500} height={500} />
        </div>
        <div className="flex flex-col gap-2 w-2/4 h-full pr-2">
          <div>
            <h1 className="text-2xl border-b-2 border-sky-200 text-center">
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
