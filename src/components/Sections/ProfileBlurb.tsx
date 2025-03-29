import Introduction from "components/Introduction";
import RoundedImgThemeWrapper from "components/logic/RoundedImageWrapper";
import TechStack from "components/logic/TechStack";
import RoundedDiv from "components/ui/RoundedDiv";
import { jsStack } from "data/techStack";

const ProfileBlurb = () => {
  return (
    <>
      <RoundedDiv>
        <div className="flex flex-col py-8 gap-24 md:gap-5 md:flex-row items-center md:justify-center py-5 md:pt-14">
          <div className="md:flex-1 w-full h-36 flex flex-col md:flex-row md:justify-center items-center">
            <RoundedImgThemeWrapper
              imgData={jsStack}
              ratio="md:w-[80%] md:pt-[80%] w-[70%] pt-[70%]"
            />
          </div>
          <div className="flex flex-col md:mr-12 gap-5 items-center text-center mx-6 md:flex-1">
            <Introduction />
          </div>
        </div>
        <div className="md:mt-5">
          <TechStack />
        </div>
      </RoundedDiv>
    </>
  );
};

export default ProfileBlurb;
