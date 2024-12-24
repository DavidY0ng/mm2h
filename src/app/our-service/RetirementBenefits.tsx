/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const RetirementBenefits = () => {
    const { t } = useTranslation("our_service");

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Column */}
                    <div className="space-y-8">
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
                                    {t(
                                        "retirement.section1.description"
                                    )}
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-800">
                                    {t("retirement.section2.title")}
                                </h3>
                                <ul className="space-y-3">
                                    {[1, 2].map((num) => (
                                        <li
                                            key={num}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-500" />
                                            </div>
                                            <p className="text-slate-600">
                                                {t(
                                                    `retirement.section2.benefits.${num}`
                                                )}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-800">
                                    {t("retirement.section3.title")}
                                </h3>
                                <ul className="space-y-3">
                                    {[1, 2].map((num) => (
                                        <li
                                            key={num}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mt-1">
                                                <div className="w-2 h-2 rounded-full bg-purple-500" />
                                            </div>
                                            <p className="text-slate-600">
                                                {t(
                                                    `retirement.section3.benefits.${num}`
                                                )}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Image Column remains the same */}
                    <div className="relative h-[600px] rounded-2xl overflow-hidden lg:order-last">
                        <Image
                            src="/our-service/retirement.png"
                            alt="Retirement in Malaysia"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RetirementBenefits;
