import { Hero } from "./_components/hero";
import { WorkField } from "./_components/WorkField";

import ScrollProgressBar from "./_components/ScrollProgressBar";

export default function Home() {
  return (
    <>
      <ScrollProgressBar/>
      <Hero/>
      <WorkField/>
    </>
  );
}
