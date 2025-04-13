import Image from "next/image";

const ImageLayout = () => {
  return (
    <div className="flex flex-row items-start justify-center">
      <Image
        src="/stack/kubernetes.svg"
        width={0}
        height={0}
        alt="image of taiga"
        className="md:mr-8 md:w-60 md:h-60 w-56 h-56"
      />
    </div>
  );
};

export default ImageLayout;
