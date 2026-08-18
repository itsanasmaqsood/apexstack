import Business from "@/components/Business";
import Courses from "@/components/Courses";
import Curriculum from "@/components/Curriculum";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Influencers from "@/components/Influencers";
import Investors from "@/components/Investors";
import Journey from "@/components/Journey";
import Program from "@/components/Program";
import Proof from "@/components/Proof";
import ProgramSkills from "@/components/ProgramSkills";
import StructuredData from "@/components/StructuredData";
import VideoTestimonials from "@/components/VideoTestimonials";
import WorkSites from "@/components/WorkSites";
import WorkshopSticky from "@/components/WorkshopSticky";

/**
 * ApexStack homepage.
 *
 * Section order and the `#root > #main-content` nesting mirror the original
 * exactly. Every section paints its own full-bleed background and draws the
 * shared 153px rails itself, so nothing here adds layout of its own.
 *
 * `VideoTestimonials` composes OfflineImmersion, which shares its black wrapper.
 * It also composed `Community` until that section was removed — see the note at
 * the bottom of VideoTestimonials.tsx.
 */
export default function Home() {
  return (
    <div id="root">
      <StructuredData />
      <main id="main-content">
        <Hero />
        <Investors />
        {/* Sits directly above "One Team. The Whole Stack." so the evidence is
            read before the list of what we build, not after it. */}
        <Proof />
        <Program />
        <Curriculum />
        <Journey />
        <ProgramSkills />
        <Influencers />
        {/* `Mentors` removed: the rail rendered 15 placeholder portraits from
            /brand/ph/ captioned "ApexStack engineer" — people who do not exist.
            The component and its images are untouched on disk; re-adding it is
            one import and one line, once real team photographs are supplied. */}
        <VideoTestimonials />
        {/* Apps first, then the sites. Both are evidence a visitor can open and
            check, so they sit together rather than either one standing alone. */}
        <WorkSites />
        <Courses />
        <Business />
        <Faq />
        <Footer />
      </main>
      <WorkshopSticky />
    </div>
  );
}
