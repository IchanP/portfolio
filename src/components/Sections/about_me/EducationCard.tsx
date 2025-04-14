import HoverableContainer from "components/ui/HoverableContainer";

export interface EducationCardProps {
  title: string;
  subheading: string;
  location: string;
  timeframe: string;
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
        <h3 className="font-outfit font-medium text-2xl text-blueAccent">
          {educationData.title}
        </h3>
        <h4 className="text-2xl font-outfit font-medium">
          {educationData.subheading}
        </h4>
        <p className="font-outfit">{educationData.location}</p>
        <p className="font-outfit font-extralight">{educationData.timeframe}</p>
      </div>
    </HoverableContainer>
  );
};

export default EducationCard;
