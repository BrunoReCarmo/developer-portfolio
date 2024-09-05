import Image from "next/image"

import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles"

import Reveal from "@/functions/reveal"

import { BebasNeue, HeadlineFont } from "@/lib/fonts"
import { Button } from "@/components/ui/button"

interface HeroProps {
    PhraseMe: string,
    ContactMeBtn: string,
    IntroductionAboutMeFirst: string,
    IntroductionAboutMeSecond: string,
    KnowMeMoreBtn: string
}

export const Hero = ({ PhraseMe, IntroductionAboutMeFirst, IntroductionAboutMeSecond, ContactMeBtn, KnowMeMoreBtn }: HeroProps) => {
    const calculateAge = (birthDate: Date): number => {
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();
        const currentDay = today.getDate();

        const birthYear = birthDate.getFullYear();
        const birthMonth = birthDate.getMonth();
        const birthDay = birthDate.getDate();

        let age = currentYear - birthYear;

        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age--;
        }

        return age;
    };

    const birthDate = new Date(2004, 1, 15);
    const age = calculateAge(birthDate);


    return (
        <div className={`w-full pt-20 min-h-fit lg:h-[75vh] flex justify-center sm:items-start md:items-center`}>
            <div className="grid w-full sm:grid-cols-1 md:grid-cols-2">
                <div className={`w-full h-full flex items-center ${styles.borderDashedB} ${styles.borderDashedR}`}>
                    <div className={`space-y-4`}>
                        <Reveal><div className={cn
                            (`text-xl`,
                                BebasNeue.className)
                        }>
                            {PhraseMe}
                        </div></Reveal>
                        <Reveal><div className={cn
                            (`text-5xl ${styles.primaryTextColor} md:text-5xl xl:text-6xl`,
                                HeadlineFont.className)
                        }>
                            Dev.<br />Full-Stack
                        </div></Reveal>
                        <Reveal>
                            <p className="xl:w-3/4">
                                {IntroductionAboutMeFirst}{age}{IntroductionAboutMeSecond}
                            </p>
                        </Reveal>
                        <div className="flex space-x-4">
                            <Button>{ContactMeBtn}</Button>
                            <Button variant="outline">{KnowMeMoreBtn}</Button>
                        </div>
                    </div>
                </div>
                <div className={`flex justify-center ${styles.borderDashedL} bg-pattern dark:bg-darkPattern`}>
                    <Image
                        src={`/socials/me.jpg`}
                        alt="Bruno Reis do Carmo photo"
                        height={340}
                        width={340}
                        className="rounded-full hidden md:block"
                        />
                    {/*Mobile*/}
                    <Image
                        src={`/socials/me.jpg`}
                        alt="Bruno Reis do Carmo photo"
                        height={200}
                        width={200}
                        className="rounded-lg mt-5 block md:hidden"
                    />
                </div>
            </div>
        </div>
    )
}