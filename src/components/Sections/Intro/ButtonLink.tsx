import RoundedIconButton from "components/ui/RoundedIconButton";
import Link from "next/link";

const ButtonLink = ({
  href,
  text,
  invertColor,
  newTab,
}: {
  href: string;
  text: string;
  invertColor?: boolean;
  newTab?: boolean;
}) => {
  // TODO - requires attention for darkmode
  const invertedColor = invertColor
    ? `bg-black hover:bg-white text-white hover:text-black dm-light-on-hover 
       dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:border-black`
    : "";
  return (
    <>
      <Link href={href} target={newTab ? "_blank" : ""}>
        <RoundedIconButton text={text} customColor={invertedColor} />
      </Link>
    </>
  );
};

export default ButtonLink;
