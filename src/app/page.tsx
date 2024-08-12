import { Hero } from "./_components/hero";
import { WorkField } from "./_components/WorkField";
import { AboutMe } from "./_components/aboutMe";

import ScrollProgressBar from "./_components/ScrollProgressBar";
import { SidebarProgress } from "./_components/sidebarProgress";

export default function Home() {
  return (
    <div>
      <ScrollProgressBar />
      <SidebarProgress />
      <Hero />
      <section id="about">
        <AboutMe />
      </section>
      <section id="scope">
        <WorkField />
      </section>
    </div>
  );
}
