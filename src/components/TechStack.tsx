"use client";
import { useImageLoader } from "hooks/imageLoader";
import ExternalLinkOpener from "./logic/ExternalLinkOpener";
import HoverableImage from "./ui/HoverableImage";
import { externalIcons } from "data/techStack";

const TechStack = () => {
  return (
    <div className="w-full flex flex-row flex-wrap items-center justify-center">
      {externalIcons.map((icon) => {
        const { src, onError } = useImageLoader({
          src: icon.src,
          fallbackSrc: "/question.svg",
        });

        return (
          <div
            className="w-1/3 flex flex-col mb-10 items-center"
            key={icon.alt}
          >
            <ExternalLinkOpener href={icon.href}>
              <HoverableImage src={src} onError={onError} alt={icon.alt} />
            </ExternalLinkOpener>
          </div>
        );
      })}
    </div>
  );
};

export default TechStack;
