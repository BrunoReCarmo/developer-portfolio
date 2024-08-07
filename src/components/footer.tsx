import Image from "next/image";
import Link from "next/link";

import { nav, socialMedia } from "@/constants";

import { Logo } from "./logo";

const Footer = () => (
    <section className={`flex-col`}>

        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 sm:mb-0 w-1/2">
                    <Logo />
                    <span className="self-center ml-4 md:ml-0 text-lg font-semibold whitespace-nowrap dark:text-white">Bruno Reis do Carmo</span>
                </a>
                <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500  dark:text-gray-400">
                    {nav.map((nav, index) => (
                        <li key={nav.id}>
                            <a href={`#${nav.id}`} className="mr-4 hover:underline md:mr-6 ">{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>


        <div className="w-full flex justify-between items-center md:flex-row flex-col py-4 border-t-[2px] border-t">
            <p className="font-poppins font-normal text-center text-sm leading-[27px]">
                Copyright Ⓒ Bruno Reis. All Rights Reserved.
            </p>

            <div className="flex flex-row mt-3 md:mt-0">
                <div className="flex dark:hidden flex-row">
                    {socialMedia.map((social, index) => (
                        <Link target="_blank" key={social.id} href={social.link}>
                            <Image
                                src={social.icon}
                                alt={social.id}
                                width={30}
                                height={30}
                                className={`object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                    }`}
                            />
                        </Link>
                    ))}
                </div>
                <div className="hidden dark:flex flex-row">
                    {socialMedia.map((social, index) => (
                        <Link target="_blank" key={social.id} href={social.link}>
                            <Image
                                src={social.iconDark}
                                alt={social.id}
                                width={30}
                                height={30}
                                className={`object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                                    }`}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Footer;