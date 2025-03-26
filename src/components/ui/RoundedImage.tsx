import Image from "next/image";
import React from "react";
import classNames from "classnames";

/**
 * A component that displays a rounded image with responsive ratios.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.altText - The alternative text for the image.
 * @param {string} props.ratio - The aspect ratio of the image for small screens.
 * Expected to be in a percentage format like 50% or 25%
 * @param {string} props.mdRatio - The aspect ratio of the image for medium and larger screens.
 * @returns {JSX.Element} The rendered RoundedImage component.
 */
const RoundedImage = ({
  src,
  altText,
  ratio,
  mdRatio,
}: {
  src: string;
  altText: string;
  ratio: string;
  mdRatio: string;
}) => {
  return (
    <div
      className={classNames(
        `relative md:w-[${mdRatio}] md:pt-[${mdRatio}] w-[${ratio}] pt-[${ratio}] absolute inset-0 overflow-hidden rounded-full`,
      )}
    >
      <Image src={src} alt={altText} fill={true} className="object-cover" />
    </div>
  );
};

export default RoundedImage;
