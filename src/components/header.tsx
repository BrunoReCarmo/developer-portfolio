"use client"

import Link from "next/link";
import { useParams } from "next/navigation";

import { useTheme } from "next-themes"
import "/node_modules/flag-icons/css/flag-icons.min.css";

//Components
import { Sun, Moon } from "lucide-react"
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const LangToggle: React.FC = () => {
    const params = useParams();
    var lang = params.lang

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    {lang === "pt" ? (
                        <span className="fi fi-br h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all rounded-lg"></span>
                    ) : lang === "en" ? (
                        <span className="fi fi-us h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all rounded-lg"></span>
                    ) : (
                        <span className="fi fi-es h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all rounded-lg"></span>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <Link href="/pt" className="flex items-center">
                    <span className="fi fi-br h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all mr-2 rounded-lg"></span>
                    Português
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link href="/en" className="flex items-center">
                    <span className="fi fi-us h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all mr-2 rounded-lg"></span>
                    English
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link href="/es" className="flex items-center">
                    <span className="fi fi-es h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all mr-2 rounded-lg"></span>
                    Español
                </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
    
}

export const Header = () => {
    return (
        <div className="flex z-10 fixed justify-center backdrop-blur-sm bg-opacity-40 ">
            <div className="flex-col w-screen ">
                <header className="top-0 flex h-16 items-center gap-4 px-4 md:px-6">
                    <form className="ml-auto flex space-x-2 items-center">
                        <LangToggle />
                        <ModeToggle />
                    </form>
                </header>
            </div>
        </div>
    )
}