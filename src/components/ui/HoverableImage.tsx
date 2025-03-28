"use client";
import Image from "next/image";
import { useState } from "react";

const HoverableImage = ({
  src,
  alt,
  onError,
}: {
  src: string;
  alt: string;
  onError: () => void;
}) => {
  const [displayAlt, setDisplayAlt] = useState(false);
  return (
    <div
      className="relative w-full"
      onMouseLeave={() => setDisplayAlt(false)}
      onMouseOver={() => setDisplayAlt(true)}
    >
      <div
        className={`text-xs bg-zinc-800 rounded-md absolute font-lexend -top-6 font-bold text-center -right-5 transition-opacity duration-200 inline-flex items-center justify-center ${
          displayAlt ? "opacity-90" : "opacity-0"
        }`}
      >
        <p className="p-[3px] break-words w-[50px]">{alt}</p>
      </div>

      <Image src={src} alt={alt} width={70} height={40} onError={onError} />
    </div>
  );
};

export default HoverableImage;
