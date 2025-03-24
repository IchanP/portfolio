import RoundedDiv from "components/ui/RoundedDiv";
import Image from "next/image";

const IntroTwo = () => {
  return (
    <RoundedDiv>
      <div className="flex justify-center items-center h-full p-3">
        <div className="relative md:w-2/4 md:pt-[50%] w-3/4 pt-[75%] absolute inset-0 overflow-hidden rounded-full">
          {/* Ensure the container is square and has overflow hidden */}
          <Image
            src="/toradora-test.jpeg"
            alt="An image of Pontus Grandin"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
    </RoundedDiv>
  );
};

export default IntroTwo;
