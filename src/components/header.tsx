"use client"

import Link from "next/link"
import { nav } from "@/constants"
import { useTheme } from "next-themes"
import { Logo } from "./logo"
//Components
import { Package2, Menu, Sun, Moon } from "lucide-react"
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

export const Header = () => {
    return (
        <div className="flex z-10 fixed justify-center backdrop-blur-sm bg-opacity-40 ">
            <div className="flex-col w-screen ">
                <header className="top-0 flex h-16 items-center gap-4 px-4 md:px-6">
                    <form className="ml-auto flex-1 flex-initial">
                        <ModeToggle />
                    </form>
                </header>
            </div>
        </div>
    )
}