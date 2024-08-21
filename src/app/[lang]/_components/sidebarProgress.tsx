"use client";

import { Logo } from '@/components/logo';
import React, { useEffect } from 'react';

interface sidebarProgressProps {
    firstItem: string,
    secondItem: string
}

export const SidebarProgress = ({firstItem, secondItem} : sidebarProgressProps) => {
    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>("section");
        const navLinks = document.querySelectorAll<HTMLAnchorElement>(".sidebar-link");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute("id");
                const navLink = document.querySelector<HTMLAnchorElement>(`.sidebar-link[href="#${id}"]`);

                if (entry.isIntersecting) {
                    navLink?.classList.add("active");
                } else {
                    navLink?.classList.remove("active");
                }
            });
        }, { threshold: 0.7 });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="fixed z-20 top-1/2 h-screen py-4 -translate-y-1/2 -left-4 md:left-0 flex flex-col space-y-14">
            <div className="w-full flex align-center justify-center">
                <Logo />
            </div>
                <div className="flex justify-center items-center">
                    <div className="sidebar-link rotate-90">
                        <a href={`#about`} className="sidebar-link pt-2 px-2">
                            {firstItem}
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="sidebar-link rotate-90">
                        <a href={`#scope`} className="sidebar-link pt-2 px-2">
                            {secondItem}
                        </a>
                    </div>
                </div>
        </div>
    );
};
