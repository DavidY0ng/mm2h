"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Link from "next/link";

const Home = () => {
    const { t } = useTranslation("home");

    const textVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            x: -20,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.6,
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="relative md:h-[940px] md:pt-[10px] pt-[30px]">
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/home/bg.jpg"
                    alt="Background"
                    fill
                    priority
                    className="object-filled"
                />
            </div>

            {/* Main content container */}
            <div className="container mx-auto px-4 py-12 lg:py-32">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
                    {/* Images section - Now first on mobile */}
                    <div className="relative order-1 lg:order-2">
                        {/* Main large center image */}
                        <div className="relative w-[300px] lg:w-[400px] h-[400px] lg:h-[550px] rounded-full overflow-hidden mx-auto">
                            <Image
                                src="/home/city-1.jpg"
                                alt="Beach chairs with umbrellas"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Top small image */}
                        <div className="hidden md:flex absolute -top-10 left-20 w-32 h-32 rounded-full overflow-hidden">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/home/city-2.jpg"
                                    alt="Resort view"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right small image */}
                        <div className="hidden md:flex absolute top-1/4 -right-3 w-40 h-40 rounded-full overflow-hidden">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/home/city-3.jpg"
                                    alt="Hotel exterior"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Bottom small image */}
                        <div className="absolute -bottom-10 left-1/5 w-40 lg:w-52 h-40 lg:h-52 rounded-full bg-white p-2">
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                <Image
                                    src="/home/city-4.jpg"
                                    alt="Pool view"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Decorative stars */}
                        <div className="absolute -top-5 right-20 w-14 h-14">
                            <Image
                                src="/home/star2.png"
                                alt="Decorative star"
                                width={60}
                                height={60}
                            />
                        </div>
                        <div className="absolute bottom-40 -left-8 w-14 h-14">
                            <Image
                                src="/home/star1.png"
                                alt="Decorative star"
                                width={60}
                                height={60}
                            />
                        </div>
                    </div>

                    {/* Text content - Now second on mobile */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            className="text-4xl md:text-6xl font-bold text-slate-700 leading-tight"
                        >
                            {t("home.title")}
                        </motion.h1>

                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ delay: 0.2 }}
                            className="text-2xl md:text-3xl font-semibold text-blue-700"
                        >
                            {t("home.subtitle")}
                        </motion.h2>

                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-slate-600 leading-relaxed"
                        >
                            {t("home.description")}
                        </motion.p>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={buttonVariants}
                        >
                            <Link href={"/our-service"}>
                                <Button
                                    size="lg"
                                    className="relative px-[100px] rounded-md group overflow-hidden"
                                >
                                    <span className="relative z-10 text-white">
                                        {t("home.learn_more")}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-yellow-400" />
                                    <div className="absolute inset-0 bg-gradient-to-l from-emerald-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;