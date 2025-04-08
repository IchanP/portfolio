import InterestOne from "components/Sections/InterestOne";
import IntroductionTextLayout from "components/Sections/Intro/IntroductionTextLayout";
import IntroItems from "components/Sections/Intro/IntroItems";
import IntroTwo from "components/Sections/Intro/IntroductionImage";
import ProfileBlurb from "components/Sections/profile/ProfileBlurb";
import ColoredHeader from "components/ui/ColoredHeader";

export default function Home() {
  return (
    <div className="flex justify-center w-11/12">
      <div
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full"
      >
        <IntroItems />
        <div className="md:col-span-2 scroll_item mt-10">
          <ProfileBlurb />
        </div>
        <div
          id="about"
          className="md:col-span-2 items-center justify-center flex flex-col gap-5 scroll_item mt-10"
        >
          <ColoredHeader text="About me" />
          <InterestOne />
        </div>
      </div>
    </div>
  );
}
