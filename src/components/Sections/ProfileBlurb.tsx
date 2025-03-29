import Introduction from "components/Introduction";
import TechStack from "components/TechStack";
import RoundedDiv from "components/ui/RoundedDiv";
import RoundedImage from "components/ui/RoundedImage";

const ProfileBlurb = () => {
  return (
    <>
      <RoundedDiv>
        <div className="flex flex-col py-8 gap-24 md:gap-5 md:flex-row items-center md:justify-center py-5 md:pt-14">
          <div className="md:flex-1 w-full h-36 flex flex-col md:flex-row md:justify-center items-center">
            <RoundedImage
              src="/stack/javascript.svg"
              altText="A yellow JavaScript logo"
              ratio="md:w-[66%] md:pt-[66%] w-[50%] pt-[50%]"
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
