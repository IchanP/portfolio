import RoundedImage from "components/ui/RoundedImage";
import IntroLayout from "./IntroLayout";
import IntroductionTextLayout from "./IntroductionTextLayout";
import IntroductionText from "./IntroductionText";
import IntroButtons from "./IntroButtons";

const IntroItems = () => {
  return (
    <>
      <IntroLayout>
        <RoundedImage
          src="/intro_image.jpg"
          altText="A yellow JavaScript logo"
          ratio="md:w-[50%] md:pt-[50%] w-[75%] 
                    pt-[75%] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25)]"
        />
        <IntroductionTextLayout>
          <IntroductionText />
          <IntroButtons />
        </IntroductionTextLayout>
      </IntroLayout>
    </>
  );
};

export default IntroItems;
