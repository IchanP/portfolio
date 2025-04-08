import RoundedIconButton from "components/ui/RoundedIconButton";
import Link from "next/link";

const ButtonLink = ({
  href,
  text,
  invertColor,
}: {
  href: string;
  text: string;
  invertColor?: boolean;
}) => {
  // TODO - requires attention for darkmode
  const invertedColor = invertColor
    ? "bg-[#27272a] hover:bg-black text-white"
    : "";
  return (
    <>
      <Link href={href}>
        <RoundedIconButton text={text} customColor={invertedColor} />
      </Link>
    </>
  );
};

export default ButtonLink;
