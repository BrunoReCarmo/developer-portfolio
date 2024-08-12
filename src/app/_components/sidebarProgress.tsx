"use client";

import { Logo } from '@/components/logo';
import { nav } from '@/constants';
import React, { useEffect } from 'react';

export const SidebarProgress: React.FC = () => {
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
            {nav.map((nav, index) => (
                <div className="flex justify-center items-center">
                    <div className="sidebar-link rotate-90">
                        <a key={nav.id} href={`${nav.id}`} className="sidebar-link pt-2 px-2">
                            {nav.title}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};
