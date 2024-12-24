/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import Image from "next/image";

const WhatIs = () => {
    const { t } = useTranslation("home");

    const benefits = [
        t("what_is.benefits.1"),
        t("what_is.benefits.2"),
        t("what_is.benefits.3"),
        t("what_is.benefits.4"),
        t("what_is.benefits.5"),
        t("what_is.benefits.6"),
        t("what_is.benefits.7"),
        t("what_is.benefits.8"),
        t("what_is.benefits.9"),
    ];

    // Header animation variants
    const headerVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    // Card container variants for staggered children
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    // Individual card variants
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/home/bg.jpg"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <p className="font-bold mb-4 text-lg text-blue-600">
                        // {t("what_is.header")}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 max-w-4xl mx-auto">
                        {t("what_is.title")}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mt-6 max-w-3xl mx-auto">
                        {t("what_is.description")}
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div key={index} variants={cardVariants}>
                                <Card className="border border-slate-100 shadow-sm hover:shadow-md hover:bg-purple-50/80 transition-all duration-300 bg-white cursor-pointer group">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
                                                    <svg
                                                        className="w-5 h-5 text-emerald-500 group-hover:text-purple-500 transition-colors duration-300"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="text-slate-700 font-medium pt-2">
                                                {benefit}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatIs;
