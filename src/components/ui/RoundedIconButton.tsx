import classNames from "classnames";

const RoundedIconButton = ({
  text,
  customColor,
}: {
  text: string;
  customColor?: string;
}) => {
  return (
    <div
      className={classNames(
        `py-2 px-5 flex flex-row items-center border-solid border-2 
        border-black dark:border-white justify-center rounded-full hover:bg-black hover:text-white 
        cursor-pointer ease-in duration-200 min-w-24 text-center`,
        customColor,
      )}
    >
      <span className="font-outfit font-bold text-lg select-none">{text}</span>
    </div>
  );
};

export default RoundedIconButton;
