import Intro from "components/Sections/Intro";
import IntroTwo from "components/Sections/IntroTwo";
import ProfileBlurb from "components/Sections/ProfileBlurb";

export default function Home() {
  return (
    <div className="flex justify-center w-11/12">
      <div
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-5 max-w-6xl w-full"
      >
        <div className="h-82 overflow-hidden">
          <Intro />
        </div>
        <div className="h-82 overflow-hidden">
          <IntroTwo />
        </div>
        <div className="md:col-span-2 mt-10">
          <ProfileBlurb />
        </div>
      </div>
    </div>
  );
}
