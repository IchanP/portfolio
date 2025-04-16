import { useEffect, useState } from "react";
import { useIsDarkmode } from "stores/DarkModeState";

type ImageLoaderProps = {
  src: { darkmode: string; lightmode: string };
  fallbackSrc: string;
};

export const useImageLoader = ({ src, fallbackSrc }: ImageLoaderProps) => {
  const [imageSrc, setImageSrc] = useState(fallbackSrc);
  const isDarkmode = useIsDarkmode((state) => state.isDarkMode);

  useEffect(() => {
    const icon = isDarkmode ? src.darkmode : src.lightmode;
    setImageSrc(icon);
  }, [isDarkmode, src]);

  const handleImageError = () => {
    setImageSrc(fallbackSrc);
  };

  return { src: imageSrc, onError: handleImageError };
};
