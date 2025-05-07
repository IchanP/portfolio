import HoverableContainer from "components/ui/HoverableContainer";

export interface EducationCardProps {
  title: string;
  subheading: string;
  location: string;
  timeframe: string;
  href: string;
}

const EducationCard = ({
  educationData,
}: {
  educationData: EducationCardProps;
}) => {
  return (
    <HoverableContainer>
      <div
        className="px-14 pt-5 py-2 flex flex-col gap-3 rounded-xl items-center 
          text-center md:w-11/12"
      >
        <h3 className="font-outfit font-medium text-2xl">
          {educationData.title}
        </h3>
        <a
          href={educationData.href}
          rel="noopener noreferrer"
          target="_blank"
          className="text-2xl font-outfit font-medium text-blueAccent underline"
        >
          {educationData.subheading}
        </a>
        <p className="font-outfit">{educationData.location}</p>
        <p className="font-outfit font-extralight">{educationData.timeframe}</p>
      </div>
    </HoverableContainer>
  );
};

export default EducationCard;
