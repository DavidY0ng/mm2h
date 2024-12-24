/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const EducationBenefits = () => {
    const { t } = useTranslation("our_service");

    return (
        <section className="relative py-20">
            {/* Background Image with Overlay */}
            {/* <div className="absolute inset-0 -z-10">
                <Image
                    src="/our-service/edu-bg.jpg"
                    alt="Education Background"
                    fill
                    className="object-cover"
                />
            </div> */}

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="relative h-[500px] rounded-2xl overflow-hidden">
                        <Image
                            src="/our-service/children.jpeg"
                            alt="Students in Malaysia"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content Column */}
                    <div className="space-y-8">
                        {/* Section Header */}
                        <div>
                            <p className="font-bold mb-4 text-lg text-blue-600">
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
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-slate-800">
                                {t("education.section1.title")}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {t(
                                    "education.section1.description"
                                )}
                            </p>
                        </div>

                        {/* Practical Benefits Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-slate-800">
                                {t("education.section2.title")}
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                                    </div>
                                    <p className="text-slate-600">
                                        {t(
                                            "education.section2.benefits.1"
                                        )}
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                                    </div>
                                    <p className="text-slate-600">
                                        {t(
                                            "education.section2.benefits.2"
                                        )}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationBenefits;
