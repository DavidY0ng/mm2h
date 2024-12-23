/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const AboutUs = () => {
    const { t } = useTranslation("home");

    // Animation variants for the image
    const imageVariants = {
        hidden: { 
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Animation variants for text content
    const textVariants = {
        hidden: { 
            opacity: 0,
            x: 50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative min-h-[780px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/about-us/bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <motion.div 
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={imageVariants}
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="/about-us/family-2.jpg"
                                alt="Beautiful Malaysian landscape"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div 
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={textVariants}
                    >
                        <div>
                            <p className="text-blue-600 font-bold mb-4">
                                // {t("about.header")}
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                                {t("about.title")}
                            </h2>
                        </div>

                        <div className="text-slate-600 space-y-4">
                            <p className="leading-relaxed text-xl">
                                {t("about.description")}
                            </p>
                        </div>

                        {/* <Button
                            className="relative px-8 rounded-full group overflow-hidden mt-8"
                        >
                            <span className="relative z-10 text-white">Learn More</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-yellow-400" />
                            <div className="absolute inset-0 bg-gradient-to-l from-emerald-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                        </Button> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;