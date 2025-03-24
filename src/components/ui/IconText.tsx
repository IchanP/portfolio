"use client";
import Image from "next/image";

interface IconTextProps {
  iconSource: string;
  alt: string;
  text?: string;
}

const IconText = ({ iconSource, alt, text }: IconTextProps) => {
  // TODO turn div into a button and wrap it in a form to download.
  return (
    <div className="flex flex-row justify-center items-center gap-3 cursor-pointer">
      <Image
        src={iconSource}
        alt={alt}
        width={40}
        height={40}
        layout="intrinsic"
        className="w-8 h-6 sm:w-10 sm:h-8 md:w-10 md:h-8"
      />
      <p>{text}</p>
    </div>
  );
};

export default IconText;
