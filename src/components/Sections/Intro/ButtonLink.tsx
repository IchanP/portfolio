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
    ? "bg-[#27272a] hover:bg-black text-white dm-light-on-hover"
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
