"use client";
import ColoredHeader from "components/ui/ColoredHeader";
import FontText from "components/ui/FontText";
import HoverTiles from "components/specials/HoverTiles";
import JustifiedText from "components/ui/JustifiedText";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Interest from "components/ui/Interest";

const InterestOne = () => {
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const hoverTilesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textContainerRef.current && hoverTilesContainerRef.current) {
      const pixelsToAdd = textContainerRef.current.offsetHeight / 32;
      hoverTilesContainerRef.current.style.height = `${textContainerRef.current.offsetHeight + pixelsToAdd}px`;
    }
  }, []);

  return (
    <div className="col-span-2">
      <Interest>
        <div
          ref={textContainerRef}
          className="mx-page flex flex-col items-center gap-5 md:w-7/12"
        >
          <ColoredHeader text="Learning" />
          <JustifiedText>
            <FontText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sed aliquam ex. Praesent tempor erat sit amet porta interdum.
              Proin lobortis consequat efficitur. Fusce hendrerit sem eget enim
              sodales feugiat. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </FontText>
            <FontText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sed aliquam ex. Praesent tempor erat sit amet porta interdum.
              Proin lobortis consequat efficitur. Fusce hendrerit sem eget enim
              sodales feugiat. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </FontText>
          </JustifiedText>
        </div>
        <div
          ref={hoverTilesContainerRef}
          className="mx-6 relative w-3/4 md:w-5/12 overflow-y-clip h-full"
        >
          <div className="flex items-center justify-center h-full">
            <Image
              src="/stack/kubernetes.svg"
              width={200}
              height={200}
              alt="image of taiga"
            />
          </div>
          {true && <HoverTiles tiles={300} />}
        </div>
      </Interest>
    </div>
  );
};

export default InterestOne;
