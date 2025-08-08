"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Reveal from "@/functions/reveal";

import { Skills } from "./Skills";
import { cn } from "@/lib/utils";
import { styles } from "@/lib/styles";
import { AboutMeProps } from "./props";
import { HeadlineFont } from "@/lib/fonts";
import { Cpu, SquareCode } from "lucide-react";
import { Frameworks, Languages } from "@/constants";

export const AboutMe = ({
  title,
  firstLetter,
  fisrtParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
  badgeFirstTitle,
  badgeSecondTitle,
}: AboutMeProps) => {
  function initAos() {
    AOS.init({
      offset: 200,
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }

  useEffect(initAos, [initAos]);

  return (
    <div className="py-6">
      <div className="flex-row my-4 flex">
        <div className="mr-2">
          <Reveal>
            <div className={cn(`text-5xl`, HeadlineFont.className)}>
              {title}
              <span className={`${styles.primaryTextColor}`}>.</span>
            </div>
          </Reveal>
        </div>
        <div className="w-full flex items-center">
          <div className="w-full h-[1px] bg-slate-300 dark:bg-slate-800"></div>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        data-aos={`fade-up`}
      >
        <div className="w-full md:col-span-2">
          <div className="text-sm font-light space-y-4">
            <div>
              <span className="p-2 font-bold text-lg rounded-lg bg-gray-300 dark:bg-slate-900 border-transparent">
                {firstLetter}
              </span>
              {fisrtParagraph}
            </div>
            <div>{secondParagraph}</div>
            <div>{thirdParagraph}</div>
            <div>{fourthParagraph}</div>
          </div>
        </div>

        <div className="w-full space-y-4">
          <Skills
            title={badgeFirstTitle}
            icon={<SquareCode className="w-5 h-5 text-background" />}
            constant={Languages}
          />
          <Skills
            title={badgeSecondTitle}
            icon={<Cpu className="w-5 h-5 text-background" />}
            constant={Frameworks}
          />
        </div>
      </div>
    </div>
  );
};
