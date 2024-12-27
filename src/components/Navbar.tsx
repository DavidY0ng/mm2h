"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import i18next from "@/lib/i18n/i18n";
import MobileNav from "./MobileNav";

type NavLinkProps = {
    href: string;
    children: ReactNode;
    isActive: boolean;
};

const NavLink = ({ href, children, isActive }: NavLinkProps) => {
    return (
        <Link href={href} className="relative px-4 py-2 group">
            <span
                className={`relative z-10 ${
                    isActive
                        ? "text-blue-600 font-medium"
                        : "text-slate-700 group-hover:text-blue-600"
                } transition-colors`}
            >
                {children}
            </span>
            <div
                className={`absolute inset-0 bg-white rounded-full ${
                    isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                } transition-opacity`}
            />
        </Link>
    );
};

const Navbar = () => {
    const pathname = usePathname();
    const [currentLanguage, setCurrentLanguage] = useState<string>("en");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const storedLanguage = window.localStorage.getItem("language") || "en";
        setCurrentLanguage(storedLanguage);
        i18next.changeLanguage(storedLanguage);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about-us", label: "About Us" },
        { href: "/our-service", label: "Our Service" },
        { href: "/news-and-media", label: "News & Media" },
        { href: "/hiring", label: "Hiring" },
    ];

    const languages = [
        { code: "en", label: "English" },
        { code: "zh", label: "中文" },
    ];

    const handleLanguageChange = async (languageCode: string) => {
        try {
            await i18next.changeLanguage(languageCode);
            if (typeof window !== "undefined") {
                window.localStorage.setItem("language", languageCode);
            }
            setCurrentLanguage(languageCode);
        } catch (error) {
            console.error("Language change failed:", error);
        }
    };

    return (
        <nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/logo.png"
                            alt="MM2H Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                        <span className="text-xl font-semibold text-slate-800">
                            MM2H
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                isActive={pathname === link.href}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Side - Language Selector and Mobile Nav */}
                    <div className="flex items-center space-x-2">
                        {isClient && (
                            <Select
                                value={currentLanguage}
                                onValueChange={handleLanguageChange}
                            >
                                <SelectTrigger className="border-0 bg-transparent hover:bg-slate-50 focus:ring-0 focus:ring-offset-0">
                                    <div className="flex items-center space-x-1 text-slate-700">
                                        <Globe className="w-5 h-5" />
                                        <SelectValue className="hidden md:inline" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent align="end" sideOffset={8}>
                                    {languages.map((lang) => (
                                        <SelectItem
                                            key={lang.code}
                                            value={lang.code}
                                            className="flex items-center justify-between"
                                        >
                                            <div className="flex items-center justify-between w-full">
                                                <span>{lang.label}</span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                        <div className="md:hidden">
                            <MobileNav
                                navLinks={navLinks}
                                pathname={pathname}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
