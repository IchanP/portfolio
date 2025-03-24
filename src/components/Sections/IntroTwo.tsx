import RoundedDiv from "components/ui/RoundedDiv";
import Image from "next/image";

const IntroTwo = () => {
  return (
    <RoundedDiv>
      <div className="flex justify-center items-center h-full p-3">
        <div className="relative w-2/4 h-full">
          <Image
            src="/toradora-test.jpeg"
            alt="An image of Pontus Grandin"
            layout="fill"
            objectFit="cover"
            className="rounded-full outline outline-offset-2 outline-black"
          />
        </div>
      </div>
    </RoundedDiv>
  );
};

export default IntroTwo;
