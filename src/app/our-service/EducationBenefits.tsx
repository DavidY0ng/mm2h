"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const EducationBenefits = () => {
    const { t } = useTranslation("our_service");

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

    // Animation variants for content
    const contentVariants = {
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

    // Animation variants for list items
    const listItemVariants = {
        hidden: { 
            opacity: 0,
            x: 20
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="overflow-hidden">
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="px-[50px] -mx-[50px]">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Image Column */}
                            <motion.div 
                                className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden order-1 lg:order-1"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={imageVariants}
                            >
                                <Image
                                    src="/our-service/children.jpeg"
                                    alt="Students in Malaysia"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                            {/* Content Column */}
                            <motion.div 
                                className="space-y-6 lg:space-y-8 order-2 lg:order-2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={contentVariants}
                            >
                                {/* Section Header */}
                                <div>
                                    <p className="font-bold mb-3 lg:mb-4 text-lg text-blue-600">
                                        // {t("education.header")}
                                    </p>
                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                                        {t("education.title")}
                                    </h2>
                                </div>

                                {/* Main Description */}
                                <p className="text-slate-600 leading-relaxed">
                                    {t("education.main_description")}
                                </p>

                                {/* Global Education Section */}
                                <div className="space-y-3 lg:space-y-4">
                                    <h3 className="text-xl font-bold text-slate-800">
                                        {t("education.section1.title")}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {t("education.section1.description")}
                                    </p>
                                </div>

                                {/* Practical Benefits Section */}
                                <div className="space-y-3 lg:space-y-4">
                                    <h3 className="text-xl font-bold text-slate-800">
                                        {t("education.section2.title")}
                                    </h3>
                                    <motion.ul 
                                        className="space-y-3"
                                        variants={{
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.2
                                                }
                                            }
                                        }}
                                    >
                                        <motion.li 
                                            className="flex items-start gap-3"
                                            variants={listItemVariants}
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-500" />
                                            </div>
                                            <p className="text-slate-600">
                                                {t("education.section2.benefits.1")}
                                            </p>
                                        </motion.li>
                                        <motion.li 
                                            className="flex items-start gap-3"
                                            variants={listItemVariants}
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-500" />
                                            </div>
                                            <p className="text-slate-600">
                                                {t("education.section2.benefits.2")}
                                            </p>
                                        </motion.li>
                                    </motion.ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EducationBenefits;