// TODO break out into child components to remove use client
import Intro from "components/Sections/Intro";
import IntroTwo from "components/Sections/IntroTwo";

export default function Home() {
  // const t = useTranslations("HomePage");
  return (
    <div className="grid grid-rows-[1fr_0.5fr] pt-5 gap-5 ml-5 mr-5 md:grid-rows-0 md:grid-cols-2 md:ml-20">
      {/* TODO break this out into a smaller component */}
      <Intro />
      <IntroTwo />
    </div>
  );
}
