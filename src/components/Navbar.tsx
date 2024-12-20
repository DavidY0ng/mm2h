"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Check } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import i18next from "@/lib/i18n/i18n";

const NavLink = ({ href, children, isActive }) => {
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
    const [currentLanguage, setCurrentLanguage] = useState("en");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setCurrentLanguage(storedLanguage);
            i18next.changeLanguage(storedLanguage);
        }
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about-us", label: "About Us" },
        { href: "/places", label: "MM2H Application" },
        { href: "/pages", label: "News & Media" },
        { href: "/blog", label: "Hiring" },
    ];

    const languages = [
        { code: "en", label: "English" },
        { code: "zh", label: "中文" },
    ];

    const handleLanguageChange = async (languageCode: string) => {
        try {
            await i18next.changeLanguage(languageCode);
            localStorage.setItem("language", languageCode);
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

                    {/* Navigation Links */}
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

                    {/* Right Side - Language Selector */}
                    <div className="flex items-center space-x-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 cursor-pointer">
                                <Globe className="w-5 h-5" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {languages.map((lang) => (
                                    <DropdownMenuItem
                                        key={lang.code}
                                        onClick={() =>
                                            handleLanguageChange(lang.code)
                                        }
                                        className="cursor-pointer flex items-center justify-between"
                                    >
                                        <span
                        
                                        >
                                            {lang.label}
                                        </span>
                                        {currentLanguage === lang.code && (
                                            <Check className="w-4 h-4 ml-2 text-blue-600" />
                                        )}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;