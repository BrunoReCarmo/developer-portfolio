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

export const AboutMe = () => {
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
                            Sobre<span className={`${styles.primaryTextColor}`}>.</span>
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
                            <span className="p-2 font-bold text-lg rounded-lg bg-gray-300 dark:bg-slate-900 border-transparent">S</span>
                            ou Bruno, um jovem de São Paulo, Brasil. Desde cedo, a busca por propósito tem impulsionado minha evolução pessoal e profissional.
                        </div>
                        <div>
                            Em 2020, durante a pandemia, explorei diferentes caminhos em busca da minha vocação. Inicialmente, considerei a engenharia civil, mas logo percebi que não era o meu interesse. Foi então que descobri o mercado de tecnologia.
                        </div>
                        <div>
                            Aos 16 anos, estruturei uma loja de componentes para computadores, o que me levou a estudar profundamente o que estava vendendo. Com 17 anos, durante o Ensino Médio, comecei minha carreira como aprendiz de suporte em TI. Aos 18 anos, no último ano do Ensino Médio, fui efetivado e assumi responsabilidades em Infraestrutura e Desenvolvimento.
                        </div>
                        <div>
                            Atualmente, cursando Análise e Desenvolvimento de Sistemas, estou focado em me dedicar totalmente ao desenvolvimento. Acredito que novos desafios continuarão a moldar minha trajetória.
                        </div>
                    </div>
                </div>

                <div className="w-full space-y-4">
                    <Skills title="Linguagens" icon={<SquareCode className="w-5 h-5 text-background" />} constant={Languages} />
                    <Skills title="Tecnologias" icon={<Cpu className="w-5 h-5 text-background" />} constant={Frameworks} />
                </div>
            </div>
        </div>
    )
}