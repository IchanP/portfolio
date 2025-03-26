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
            ratio="75%"
            mdRatio="91%"
          />
        </div>
      </RoundedDiv>
    </div>
  );
};

export default IntroTwo;
