import RoundedDiv from "components/ui/RoundedDiv";
import RoundedImage from "components/ui/RoundedImage";

const ProfileBlurb = () => {
  return (
    <>
      <RoundedDiv>
        <div className="flex flex-col py-8 gap-10 md:flex-row items-center py-5">
          <RoundedImage
            src="/toradora-test.jpeg"
            altText="A yellow JavaScript logo"
            ratio="50%"
            mdRatio="25%"
          />
          <div className="flex flex-col gap-5 items-center text-center mx-6">
            <h1 className="text-2xl">Fullstack JavaScript Developer</h1>
            <div className="flex flex-col gap-5 items-center text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </RoundedDiv>
    </>
  );
};

export default ProfileBlurb;
