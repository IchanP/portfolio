import IconText from "./IconText";

const RoundedIconButton = ({
  text,
  iconUrl,
}: {
  text: string;
  iconUrl?: string;
}) => {
  return (
    <div
      className="py-1 pb-2 px-5 flex flex-row items-center border-dashed border-2 border-black dark:border-white 
    justify-center rounded-full dark:bg-darkPrimary hover:dark:bg-darkHover hover:bg-lightHover cursor-pointer ease-in duration-100"
    >
      {iconUrl && <IconText iconSource={iconUrl} alt={text} />}
      <span className="ml-2 text-lg">{text}</span>
    </div>
  );
};

export default RoundedIconButton;
