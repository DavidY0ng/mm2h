/* eslint-disable react/jsx-no-comment-textnodes */
"use client"

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const WhyChooseUs = () => {
    const features = [
        {
            icon: "/why-choose-us/img-2.svg",
            title: "Expert Processing",
            description:
                "Our experienced team ensures smooth and efficient MM2H application processing, handling all documentation with meticulous attention to detail.",
        },
        {
            icon: "/why-choose-us/img-1.svg",
            title: "Tailored Service",
            description:
                "We provide personalized consultation and customized solutions that perfectly align with your unique requirements and lifestyle preferences.",
        },
        {
            icon: "/why-choose-us/img-4.svg",
            title: "Complete Support",
            description:
                "Comprehensive assistance throughout your journey, from initial paperwork to helping you settle comfortably in your new Malaysian home.",
        },
        {
            icon: "/why-choose-us/img-3.svg",
            title: "Local Network",
            description:
                "Access to our extensive network of trusted local partners, including real estate agents, lawyers, and lifestyle service providers.",
        },
        {
            icon: "/why-choose-us/img-5.svg",
            title: "Family Care Services",
            description:
                "Dedicated support for families including education guidance, healthcare arrangements, and connecting you with family-friendly communities in Malaysia.",
        },
        {
            icon: "/why-choose-us/img-6.svg",
            title: "Travel & Relocation",
            description:
                "Comprehensive relocation assistance including flight arrangements, accommodation booking, and seamless transition planning for your move to Malaysia.",
        },
    ];

    // Header animation variants
    const headerVariants = {
        hidden: { 
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Card animation variants
    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    // Container variants for staggered children
    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <p className="text-blue-600 font-bold mb-4">
                        // WHY CHOOSE US
                    </p>
                    <h2 className="text-4xl md:text-4xl font-bold text-slate-800 max-w-3xl mx-auto">
                        SOME OF THE REASONS WHY SKYWALKER
                    </h2>
                </motion.div>

                {/* Features Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className="group"
                            variants={cardVariants}
                        >
                            {/* Feature Card */}
                            <div className="flex flex-col items-center text-center">
                                {/* Icon Container */}
                                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                                    <div className="relative w-10 h-10">
                                        <Image
                                            src={feature.icon}
                                            alt={feature.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-slate-800 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;