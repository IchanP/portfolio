import classNames from "classnames";

const SmallSubudedText = ({
  text,
  textColor,
}: {
  text: string;
  textColor: string;
}) => {
  return (
    <p
      className={classNames(
        "text-sm text-center dark:text-black-200",
        textColor,
      )}
    >
      {text}
    </p>
  );
};

export default SmallSubudedText;
