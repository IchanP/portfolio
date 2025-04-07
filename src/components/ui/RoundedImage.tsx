import Image from "next/image";
import React from "react";
import classNames from "classnames";

/**
 * A component that displays a rounded image with responsive ratios.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.altText - The alternative text for the image.
 * @param {string} props.ratio - The aspect ratios in Tailwind CSS format. This field is directly applied as a classname.
 * Example: `md:w-[75%] md:pt-[75%] w-[25%] pt-[25%] z-0`
 * @returns {JSX.Element} The rendered RoundedImage component.
 */
const RoundedImage = ({
  src,
  altText,
  ratio,
}: {
  src: string;
  altText: string;
  ratio: string;
}) => {
  console.log("Test");
  return (
    <div
      className={classNames(`relative overflow-hidden rounded-full z-0`, ratio)}
    >
      <Image src={src} alt={altText} fill={true} className="object-cover " />
    </div>
  );
};

export default RoundedImage;
