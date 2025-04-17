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
        `py-2 px-5 centered-flex flex-row border-solid border-2 font-outfit font-semibold
        border-black dark:border-white rounded-full hover:bg-black hover:text-white 
        cursor-pointer min-w-24 text-center dm-light-on-hover ease-200 dark:bg-black`,
        customColor,
      )}
    >
      <span className="desc-lg-txtselect-none">{text}</span>
    </div>
  );
};

export default RoundedIconButton;
