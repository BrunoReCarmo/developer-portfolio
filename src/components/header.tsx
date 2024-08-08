"use client"

import Link from "next/link"
import { nav } from "@/constants"
import { useTheme } from "next-themes"
import { Logo } from "./logo"
//Components
import { Package2, Menu, Sun, Moon } from "lucide-react"
import { Button } from "./ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
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
        <div className="flex justify-center">
            <div className="mt-2 max-w-[95%] w-full flex-col">
                <header className="top-0 flex h-16 items-center gap-4 border rounded-xl bg-background backdrop-blur-lg px-4 md:px-6">
                    <Link
                        href="#"
                        className="hidden md:block flex items-center gap-2 mr-2 text-lg font-semibold md:text-base"
                    >
                        <Logo />
                        <span className="sr-only">Bruno Reis do Carmo</span>
                    </Link>
                    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                        {nav.map((nav) => (
                            <Link 
                                key={nav.id}
                                href={`#${nav.id}`}
                                className="text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {nav.title}
                            </Link>
                        ))}
                    </nav>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Logo />
                                    <span className="sr-only">Bruno Reis do Carmo</span>
                                </Link>
                                {nav.map((nav) => (
                                    <Link
                                    key={nav.id}
                                        href={`#${nav.id}`}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        {nav.title}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Link
                        href="/"
                        className="md:hidden md:block flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Logo/>
                        <span className="sr-only">Bruno Reis do Carmo</span>
                    </Link>
                    <form className="ml-auto flex-1 flex-initial">
                        <ModeToggle />
                    </form>
                </header>
            </div>
        </div>
    )
}