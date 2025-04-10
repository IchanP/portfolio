import InterestOne from "components/Sections/about_me/InterestOne";
import IntroItems from "components/Sections/Intro/IntroItems";
import PageSections from "components/ui/PageSections";
export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <div id="home" className="w-full">
        <PageSections alternateColor={false}>
          <IntroItems />
        </PageSections>
        <PageSections alternateColor={true}>
          <InterestOne />
        </PageSections>
      </div>
    </div>
  );
}
