"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles"
import { HeadlineFont, BebasNeue } from "@/lib/fonts"

import Reveal from "@/functions/reveal"

import { FieldsSkills } from "@/constants"

import { Database, PanelsTopLeft, Server } from "lucide-react"

interface WorkFieldProps {
    title: string,
    subtitle: string,
    thirdSubtitle: string,
    firstItem: string,
    secondItem: string,
    thirdItem: string,
}

export const WorkField = ({title, subtitle, thirdSubtitle, firstItem, secondItem, thirdItem} : WorkFieldProps) => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div className={`${styles.borderDashedR}`}>
            <div className="w-full h-fit mt-12 md:mt-0 flex justify-center items-start">
                <div className="w-full justify-start flex">
                    <div className="min-w-full h-full">
                        <div className="space-y-2">
                            <Reveal><div className={cn
                                (`text-5xl ${styles.primaryTextColor}`,
                                    HeadlineFont.className)
                            }>
                                {title}
                            </div></Reveal>
                            <Reveal><div className={cn
                                (`text-lg`,
                                    BebasNeue.className)
                            }>
                                {subtitle}
                            </div></Reveal>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 min-w-full gap-3">
                    <div className="hover:bg-gray-300 hover:dark:bg-slate-900 shadow-gray-300 dark:shadow-slate-900 w-full h-fit rounded-lg"
                        data-aos={`fade-up`}
                        data-aos-delay="100"
                    >
                        <div className="grid w-full h-full grid-cols-4 p-3">
                            <div className="flex items-center justify-center">
                                <div className="bg-gray-300 dark:bg-slate-900 p-3 rounded-full">
                                <PanelsTopLeft className={`h-8 w-8 hover:text-orange-600 ${styles.primaryTextColor}`} />
                                </div>
                            </div>
                            <div className="col-span-3">
                                <Reveal><div className={cn
                                    (`text-md`,
                                        HeadlineFont.className)
                                }>
                                    FrontEnd
                                </div></Reveal>
                                <Reveal><p className={`text-xs`}>
                                    {firstItem}
                                </p></Reveal>
                            </div>
                        </div>
                    </div>
                    <div className="hover:bg-gray-300 hover:dark:bg-slate-900 shadow-gray-300 dark:shadow-slate-900 w-full h-fit rounded-lg"
                        data-aos={`fade-up`}
                        data-aos-delay="200"
                    >
                        <div className="grid w-full h-full grid-cols-4 p-3">
                            <div className="flex items-center justify-center">
                                <div className="bg-gray-300 dark:bg-slate-900 p-3 rounded-full">
                                <Server className={`h-8 w-8 hover:text-orange-600 ${styles.primaryTextColor}`} />
                                </div>
                            </div>
                            <div className="col-span-3">
                                <Reveal><div className={cn
                                    (`text-md`,
                                        HeadlineFont.className)
                                }>
                                    Backend
                                </div></Reveal>
                                <Reveal><p className={`text-xs`}>
                                    {secondItem}
                                </p></Reveal>
                            </div>
                        </div>
                    </div>
                    <div className="hover:bg-gray-300 hover:dark:bg-slate-900 shadow-gray-300 dark:shadow-slate-900 w-full h-fit rounded-lg"
                        data-aos={`fade-up`}
                    data-aos-delay="300"
                    >
                        <div className="grid w-full h-full grid-cols-4 p-3">
                            <div className="flex items-center justify-center">
                                <div className="bg-gray-300 dark:bg-slate-900 p-3 rounded-full">
                                <Database className={`h-8 w-8 hover:text-orange-600 ${styles.primaryTextColor}`} />
                                </div>
                            </div>
                            <div className="col-span-3">
                                <Reveal><div className={cn
                                    (`text-md`,
                                        HeadlineFont.className)
                                }>
                                    {thirdSubtitle}
                                </div></Reveal>
                                <Reveal><p className={`text-xs`}>
                                    {thirdItem}
                                </p></Reveal>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}