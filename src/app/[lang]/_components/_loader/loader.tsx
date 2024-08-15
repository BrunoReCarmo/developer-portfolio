"use client";

import "./Loader.css";
import React, { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { LogoFont } from "@/lib/fonts";

const Animation = () => {
    return (
        <div className={`flex justify-center items-center h-screen`}>
            <div className="wrapper">
                <svg>
                    <text x="50%" y="50%" dy=".35em" textAnchor="middle" className={cn
                        ("",
                            LogoFont.className)
                    }>
                        Bruno
                    </text>
                </svg>
            </div>
        </div>
    );
};

interface LoaderProps {
    children: React.ReactNode;
}

const Loader = ({ children }: LoaderProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading ? <Animation /> : children}
        </>
    );
};

export default Loader;
