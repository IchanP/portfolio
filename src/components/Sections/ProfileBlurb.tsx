import ExternalLinkOpener from "components/logic/ExternalLinkOpener";
import TechStack from "components/TechStack";
import HoverableImage from "components/ui/HoverableImage";
import JustifiedText from "components/ui/JustifiedText";
import RoundedDiv from "components/ui/RoundedDiv";
import RoundedImage from "components/ui/RoundedImage";
import { externalIcons } from "data/techStack";

const ProfileBlurb = () => {
  return (
    <>
      <RoundedDiv>
        <div className="flex flex-col py-8 gap-10 md:flex-row items-center py-5">
          <RoundedImage
            src="/toradora-test.jpeg"
            altText="A yellow JavaScript logo"
            ratio="md:w-[50%] md:pt-[50%] w-[50%] pt-[50%]"
          />
          <div className="flex flex-col gap-5 items-center text-center mx-6">
            <h1 className="text-2xl">Fullstack JavaScript Developer</h1>
            <JustifiedText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </JustifiedText>
          </div>
          <TechStack />
        </div>
      </RoundedDiv>
    </>
  );
};

export default ProfileBlurb;
