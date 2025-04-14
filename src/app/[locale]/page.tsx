import AboutMe from "components/Sections/about_me/AboutMe";
import IntroItems from "components/Sections/Intro/IntroItems";
import ProjectItems from "components/Sections/projects/ProjectItems";
import ContactSection from "components/Sections/contact/ContactSection";
import PageSections from "components/ui/PageSections";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <div id="home" className="w-full">
        <PageSections alternateColor={false}>
          <IntroItems />
        </PageSections>
        <PageSections alternateColor={true}>
          <AboutMe />
        </PageSections>
        <PageSections alternateColor={false}>
          <ProjectItems />
        </PageSections>
        <PageSections alternateColor={true}>
          <ContactSection />
        </PageSections>
      </div>
    </div>
  );
}
