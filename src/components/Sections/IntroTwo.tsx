import RoundedDiv from "components/ui/RoundedDiv";
import RoundedImage from "components/ui/RoundedImage";

const IntroTwo = () => {
  return (
    <div className="flex flex-col md:ml-24">
      <RoundedDiv>
        <div className="flex justify-center items-center p-3 px-12">
          <RoundedImage
            src="/toradora-test.jpeg"
            altText="A yellow JavaScript logo"
            ratio="md:w-[75%] md:pt-[75%] w-[75%] pt-[75%]"
          />
        </div>
      </RoundedDiv>
    </div>
  );
};

export default IntroTwo;
