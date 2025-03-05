import ExternalLinkOpener from "components/logic/ExternalLinkOpener";
import Image from "next/image";

interface ProjectBoxProps {
  title: string;
  image: string;
  summary: string;
  href: string;
}

const ProjectBox = ({ title, image, summary, href }: ProjectBoxProps) => {
  return (
    <ExternalLinkOpener href={href}>
      <div className="flex flex-col gap-5 p-2 rounded-md bg-lightSecondary dark:bg-darkSecondary h-full lg:flex-row max-w-2/4">
        <div className="flex flex-col h-full justify-center items-center md:justify-center lg:w-2/4">
          <Image alt="Project Image" src={image} width={250} height={250} />
        </div>
        <div className="flex flex-col gap-2 h-2/4 h-full pr-2 lg:w-2/4">
          <div>
            <h1 className="text-2xl font-bold border-b-2 border-sky-700 text-center text-blue-700 dark:border-sky-100 dark:text-cyan-500">
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
