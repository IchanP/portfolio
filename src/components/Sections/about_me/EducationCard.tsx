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
    <div
      className="px-14 pt-5 py-2 flex flex-col gap-3 rounded-md items-center 
          border border-zinc-400 shadow-[0_1px_2px_2px_rgba(0,0,0,0.25)]
          text-center w-11/12 h-full hover:scale-105 ease-200"
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
  );
};

export default EducationCard;
