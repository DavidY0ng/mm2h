/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client"
import React from "react";
import Image from "next/image";

const EducationBenefits = () => {
    return (
        <section className="relative py-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/our-service/edu-bg.jpg"
                    alt="Education Background"
                    fill
                    className="object-cover"
                />
            </div>

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
                                // EDUCATION BENEFITS
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                                Advantages for Your Child's Future
                            </h2>
                        </div>

                        {/* Main Description */}
                        <p className="text-slate-600 leading-relaxed">
                            Malaysia offers a world-class education system
                            aligned with UK and Western standards, recognized
                            globally. Children enjoy equal access to schools in
                            Kuala Lumpur, benefiting from bilingual education at
                            reasonable costs, laying a strong foundation for
                            their future success.
                        </p>

                        {/* Global Education Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-slate-800">
                                1. Global Education Opportunities
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Malaysia's '3+0' and 'twinning' programs allow
                                students to transfer credits seamlessly to
                                prestigious universities in the US, UK, Canada,
                                and Australia. These pathways eliminate the
                                IELTS requirement and enable local visa
                                processing. Graduates receive internationally
                                recognized degrees at just a quarter of the cost
                                of direct overseas study.
                            </p>
                        </div>

                        {/* Practical Benefits Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-slate-800">
                                2. Practical Benefits for Families
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                                    </div>
                                    <p className="text-slate-600">
                                        Children with Second Home Visas can
                                        pursue university education locally and
                                        are eligible for a work permit upon
                                        graduation without the need for visa
                                        conversion.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 rounded-full bg-purple-500" />
                                    </div>
                                    <p className="text-slate-600">
                                        Malaysia's low barriers to obtaining
                                        overseas Chinese status offer additional
                                        advantages, such as tax exemptions,
                                        bonus points for college entrance exams,
                                        and eligibility to adopt a second child.
                                        Prioritizing immigration before pursuing
                                        education abroad ensures stability and a
                                        strong foundation for future endeavors.
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
