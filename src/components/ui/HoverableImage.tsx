"use client";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { useIsDarkmode } from "stores/DarkModeState";

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
  const [saturation, setSaturation] = useState("saturate-50");

  const onHover = () => {
    setDisplayAlt(true);
    setSaturation("saturate-100");
  };

  const onLeave = () => {
    setDisplayAlt(false);
    setSaturation("saturate-50");
  };

  return (
    <div
      className="relative w-full"
      onMouseLeave={() => onLeave()}
      onMouseOver={() => onHover()}
    >
      <div
        className={`text-xs bg-zinc-800 rounded-md flex flex-row justify-center
      items-center absolute font-lexend -top-6 font-bold
      text-center transition-opacity duration-200 inline-flex items-center justify-center
      left-1/2 transform -translate-x-1/2 ${
        displayAlt ? "opacity-90" : "opacity-0"
      }`}
      >
        <p className="p-[3px] no-wrap max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">
          {alt}
        </p>
      </div>

      <Image
        src={src}
        alt={alt}
        width={70}
        height={40}
        onError={onError}
        className={classNames("ease-in-out duration-300", saturation)}
      />
    </div>
  );
};

export default HoverableImage;
