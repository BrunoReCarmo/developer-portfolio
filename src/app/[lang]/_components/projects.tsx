"use client";

import { useParams } from "next/navigation"

import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles"
import { HeadlineFont, BebasNeue } from "@/lib/fonts"

import Reveal from "@/functions/reveal"

interface ProjectsProps {
    CTA: string,
    title: string,
    subtitle: string,
    firstText: string,
    secondText: string,
    thirdText: string
}

export const Projects = ({ CTA, title, subtitle, firstText, secondText, thirdText }: ProjectsProps) => {
    const params = useParams();
    var lang = params.lang

    return (
        <>
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
            <div className="mx-auto bg-pattern dark:bg-darkPattern md:p-4 my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group cursor mx-4 overflow-hidden rounded-2xl bg-gray-300 dark:bg-slate-900 border-transparent shadow-xl duration-200 hover:-translate-y-4">
                    <div className="flex flex-col justify-between overflow-hidden">
                    <video controls src={`/${lang}/socials/innify.mp4`} />
                    </div>
                    <div className="flex-1 overflow-hidden bg-gray-300 dark:bg-slate-900 border-transparent px-6 py-8">
                        <h5 className="group-hover:text-orange-700 mb-4 text-xl font-bold">Innify</h5>
                        <p className="text-gray-600 text-sm">{firstText}</p>
                    </div>
                </div>
                <div className="group cursor mx-4 overflow-hidden rounded-2xl bg-gray-300 dark:bg-slate-900 border-transparent shadow-xl duration-200 hover:-translate-y-4">
                    <div className="flex flex-col justify-between overflow-hidden">
                        <video controls src={`/${lang}/socials/kiria.mp4`} />
                    </div>
                    <div className="flex-1 overflow-hidden bg-gray-300 dark:bg-slate-900 border-transparent px-6 py-8">
                        <h5 className="group-hover:text-orange-700 mb-4 text-xl font-bold">Kiria</h5>
                        <p className="text-gray-600 text-sm">{secondText}</p>
                    </div>
                </div>
                <div className="group cursor mx-4 overflow-hidden rounded-2xl bg-gray-300 dark:bg-slate-900 border-transparent shadow-xl duration-200 hover:-translate-y-4">
                    <div className="flex flex-col justify-between overflow-hidden">
                    <video controls src={`/${lang}/socials/nimb.mp4`} />
                    </div>
                    <div className="flex-1 overflow-hidden bg-gray-300 dark:bg-slate-900 border-transparent px-6 py-8">
                        <h5 className="group-hover:text-orange-700 mb-4 text-xl font-bold">Nimb</h5>
                        <p className="text-gray-600 text-sm">{thirdText}</p>
                    </div>
                </div>
            </div>

        </>
    )
}