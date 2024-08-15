"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Reveal from "@/functions/reveal"

import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles"
import { HeadlineFont, BebasNeue } from "@/lib/fonts"

import { Frameworks, Languages } from "@/constants"

import { Cpu, SquareCode } from "lucide-react"

import { Badge } from "@/components/ui/badge"

interface SkillsPros {
    title: string;
    icon: React.ReactNode;
    constant: any
}

const Skills = ({ title, icon, constant }: SkillsPros) => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>
            <div className={cn
                (`flex items-center text-xl`,
                    BebasNeue.className)
            }
            >
                <div className={`${styles.primaryBgColor} p-1.5 rounded-lg mr-2`}>
                    {icon}
                </div>
                <Reveal>
                    <div className="flex items-center">
                        {title}
                    </div>
                </Reveal>
            </div>
            <div>
                {constant.map((data: any) => (
                    <Badge key={data.id} variant="secondary" className="m-1" data-aos={`fade-up`}
                        data-aos-delay={data.id * 50}>{data.name}</Badge>
                ))}
            </div>
        </>
    )
}

interface AboutMeProps {
    title: string,
    firstLetter: string,
    fisrtParagraph: string,
    secondParagraph: string,
    thirdParagraph: string,
    fourthParagraph: string,
    badgeFirstTitle: string,
    badgeSecondTitle: string,
}

export const AboutMe = ({ title, firstLetter, fisrtParagraph, secondParagraph, thirdParagraph, fourthParagraph, badgeFirstTitle, badgeSecondTitle }: AboutMeProps) => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div className="py-6">
            <div className="flex-row my-4 flex">
                <div className="mr-2">
                    <Reveal>
                        <div className={cn
                            (`text-5xl`,
                                HeadlineFont.className)
                        }>
                            {title}<span className={`${styles.primaryTextColor}`}>.</span>
                        </div>
                    </Reveal>
                </div>
                <div className="w-full flex items-center">
                    <div className="w-full h-[1px] bg-slate-300 dark:bg-slate-800">
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos={`fade-up`}>
                <div className="w-full md:col-span-2">
                    <div className="text-sm font-light space-y-4">
                        <div>
                            <span className="p-2 font-bold text-lg rounded-lg bg-gray-300 dark:bg-slate-900 border-transparent">
                                {firstLetter}
                            </span>
                            {fisrtParagraph}
                        </div>
                        <div>
                            {secondParagraph}
                        </div>
                        <div>
                            {thirdParagraph}
                        </div>
                        <div>
                            {fourthParagraph}
                        </div>
                    </div>
                </div>

                <div className="w-full space-y-4">
                    <Skills title={badgeFirstTitle} icon={<SquareCode className="w-5 h-5 text-background" />} constant={Languages} />
                    <Skills title={badgeSecondTitle} icon={<Cpu className="w-5 h-5 text-background" />} constant={Frameworks} />
                </div>
            </div>
        </div>
    )
}