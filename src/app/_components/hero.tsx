import Image from "next/image"

import { cn } from "@/lib/utils"
import { styles } from "@/lib/styles"

import Reveal from "@/functions/reveal"

import { BebasNeue, HeadlineFont } from "@/lib/fonts"
import { Button } from "@/components/ui/button"

export const Hero = () => {
    const calcularIdade = (dataNascimento: Date): number => {
        const hoje = new Date();
        const anoAtual = hoje.getFullYear();
        const mesAtual = hoje.getMonth();
        const diaAtual = hoje.getDate();

        const anoNascimento = dataNascimento.getFullYear();
        const mesNascimento = dataNascimento.getMonth();
        const diaNascimento = dataNascimento.getDate();

        let idade = anoAtual - anoNascimento;

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }

        return idade;
    };

    const dataNascimento = new Date(2004, 1, 15);
    const idade = calcularIdade(dataNascimento);

    return (
        <div className={`w-full h-[75vh] max-h-screen flex justify-center sm:items-start md:items-center ${styles.borderDashedB}`}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2">
                <div className={`w-full h-full flex items-center ${styles.borderDashedR}`}>
                    <div className="space-y-4">
                        <Reveal><div className={cn
                            (`text-xl`,
                                BebasNeue.className)
                        }>
                            Eu sou um
                        </div></Reveal>
                        <Reveal><div className={cn
                            (`text-5xl ${styles.primaryTextColor} md:text-5xl xl:text-6xl`,
                                HeadlineFont.className)
                        }>
                            Desenvolvedor<br />Full-Stack
                        </div></Reveal>
                        <Reveal><p className="xl:w-3/4">Eu sou o Bruno Reis do Carmo, e tenho {idade} anos. Entusiasta em transformar
                            ideias em realidade</p></Reveal>
                        <div className="flex space-x-4">
                            <Button>Entrar em contato</Button>
                            <Button variant="outline">Me conhecer +</Button>
                        </div>
                    </div>
                </div>
                <div className={`flex justify-center ${styles.borderDashedL} bg-pattern dark:bg-darkPattern`}>
                    <Image
                        src="/me.jpg"
                        alt="Bruno Reis do Carmo photo"
                        height={340}
                        width={340}
                        className="rounded-full hidden md:block"
                    />
                    {/*Mobile*/}
                    <Image
                        src="/me.jpg"
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