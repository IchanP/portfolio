import RoundedImage from "components/ui/RoundedImage";

const ImageLayout = () => {
  return (
    <div className="flex flex-row items-start justify-center 2xl:ml-32 ">
      <RoundedImage
        src="/about_color.png"
        altText="image of taiga"
        ratio="md:mr-8 md:w-60 md:h-60 w-56 h-56 
        shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
};

export default ImageLayout;
