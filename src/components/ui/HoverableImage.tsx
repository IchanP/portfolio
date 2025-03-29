"use client";
import classNames from "classnames";
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
  // TODO clean this up? too many variables
  const [displayAlt, setDisplayAlt] = useState(false);
  const [saturation, setSaturation] = useState(`md:saturate-50`);
  const [scaleUp, setScaleUp] = useState("");

  const onHover = () => {
    setDisplayAlt(true);
    setSaturation("saturate-100");
    setScaleUp(`md:scale-110`);
  };

  const onLeave = () => {
    setDisplayAlt(false);
    setSaturation(`md:saturate-50`);
    setScaleUp("");
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
        displayAlt ? "opacity-80" : "opacity-0"
      }`}
      >
        <p className="p-[3px] no-wrap max-w-[100px] text-white whitespace-nowrap overflow-hidden text-ellipsis">
          {alt}
        </p>
      </div>

      <Image
        src={src}
        alt={alt}
        width={70}
        height={40}
        onError={onError}
        className={classNames(
          "md:ease-in-out md:duration-300",
          saturation,
          scaleUp,
        )}
      />
    </div>
  );
};

export default HoverableImage;
