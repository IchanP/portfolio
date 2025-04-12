import Image from "next/image";

const ImageLayout = () => {
  return (
    <div className="flex flex-row items-start justify-center md:mx-6">
      <Image
        src="/stack/kubernetes.svg"
        width={250}
        height={250}
        alt="image of taiga"
        className="md:mr-8"
      />
    </div>
  );
};

export default ImageLayout;
