/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const RetirementBenefits = () => {
    const { t } = useTranslation("our_service");

    // Animation variants for content
    const contentVariants = {
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

    // Animation variants for image
    const imageVariants = {
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
            x: -20
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
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Column */}
                    <motion.div 
                        className="space-y-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={contentVariants}
                    >
                        {/* Section Header */}
                        <div>
                            <p className="font-bold mb-4 text-lg text-blue-600">
                                // {t("retirement.header")}
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                                {t("retirement.title")}
                            </h2>
                        </div>

                        {/* Content Sections */}
                        <div className="space-y-8">
                            {/* Section 1 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-800">
                                    {t("retirement.section1.title")}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {t("retirement.section1.description")}
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-800">
                                    {t("retirement.section2.title")}
                                </h3>
                                <motion.ul 
                                    className="space-y-3"
                                    variants={{
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.1
                                            }
                                        }
                                    }}
                                >
                                    {[1, 2].map((num) => (
                                        <motion.li
                                            key={num}
                                            className="flex items-start gap-3"
                                            variants={listItemVariants}
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-500" />
                                            </div>
                                            <p className="text-slate-600">
                                                {t(`retirement.section2.benefits.${num}`)}
                                            </p>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>

                            {/* Section 3 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-800">
                                    {t("retirement.section3.title")}
                                </h3>
                                <motion.ul 
                                    className="space-y-3"
                                    variants={{
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.1
                                            }
                                        }
                                    }}
                                >
                                    {[1, 2].map((num) => (
                                        <motion.li
                                            key={num}
                                            className="flex items-start gap-3"
                                            variants={listItemVariants}
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-500" />
                                            </div>
                                            <p className="text-slate-600">
                                                {t(`retirement.section3.benefits.${num}`)}
                                            </p>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div 
                        className="relative h-[600px] rounded-2xl overflow-hidden lg:order-last"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={imageVariants}
                    >
                        <Image
                            src="/our-service/retirement.png"
                            alt="Retirement in Malaysia"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RetirementBenefits;