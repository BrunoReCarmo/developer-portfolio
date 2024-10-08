import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@base/i18n-config";
import { Hero } from "./_components/hero";
import { WorkField } from "./_components/WorkField";
import { AboutMe } from "./_components/aboutMe";
import ScrollProgressBar from "./_components/ScrollProgressBar";
import { SidebarProgress } from "./_components/sidebarProgress";
import { Projects } from "./_components/projects";

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div>
      <ScrollProgressBar />
      <SidebarProgress
        firstItem={dictionary["sidebarProgress"].firstRow}
        secondItem={dictionary["sidebarProgress"].secondRow}
        thirdItem={dictionary["sidebarProgress"].thirdRow}
      />
      <Hero
        PhraseMe={dictionary["introduction"].Iam}
        IntroductionAboutMeFirst={dictionary["introduction"].resumeFirst}
        IntroductionAboutMeSecond={dictionary["introduction"].resumeSecond}
        ContactMeBtn={dictionary["introduction"].buttonContact}
        KnowMeMoreBtn={dictionary["introduction"].buttonKnowMeMore}
      />
      <section id="about">
        <AboutMe
          title={dictionary["about"].title}
          firstLetter={dictionary["about"].firstLetter}
          fisrtParagraph={dictionary["about"].firstParagraph}
          secondParagraph={dictionary["about"].secondParagraph}
          thirdParagraph={dictionary["about"].thirdParagraph}
          fourthParagraph={dictionary["about"].fourthParagraph}
          badgeFirstTitle={dictionary["about"].badges.firstTitle}
          badgeSecondTitle={dictionary["about"].badges.secondTitle}
        />
      </section>
      <section id="project">
        <Projects
          CTA={dictionary["projects"].cta}
          title={dictionary["projects"].title}
          subtitle={dictionary["projects"].subtitle}
          firstText={dictionary["projects"].firstText}
          secondText={dictionary["projects"].secondText}
          thirdText={dictionary["projects"].thirdText}
        />
      </section>
      <section id="scope">
        <WorkField
          title={dictionary["scope"].title}
          subtitle={dictionary["scope"].subtitle}
          thirdSubtitle={dictionary["scope"].thirdScopeTitle}
          firstItem={dictionary["scope"].scopeContent.firstScope}
          secondItem={dictionary["scope"].scopeContent.secondScope}
          thirdItem={dictionary["scope"].scopeContent.thirdScope}
        />
      </section>
    </div>
  );
}
