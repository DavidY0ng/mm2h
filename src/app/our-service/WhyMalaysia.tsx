/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";

const WhyMalaysia = () => {
    const features = [
        {
            title: "Affordable Living",
            description:
                "Enjoy a high-quality lifestyle at a fraction of the cost compared to many Western countries.",
            image: "/our-service/carousel/affordable.jpg",
        },
        {
            title: "Multicultural Society",
            description:
                "Malaysia is home to diverse ethnic groups, creating a rich cultural tapestry and welcoming environment.",
            image: "/our-service/carousel/multicultural.jpeg",
        },
        {
            title: "Strategic Location",
            description:
                "Situated in the heart of Southeast Asia, Malaysia is a hub for travel and business opportunities.",
            image: "/our-service/carousel/location.jpg",
        },
        {
            title: "Excellent Infrastructure",
            description:
                "Experience modern amenities, from world-class airports to high-speed internet and top-notch medical facilities.",
            image: "/our-service/carousel/infrastructure.jpg",
        },
        {
            title: "Tropical Paradise",
            description:
                "Immerse yourself in Malaysia's stunning beaches, lush rainforests, and year-round tropical climate.",
            image: "/our-service/carousel/tropical.jpg",
        },
    ];

    // Animation variants for carousel
    const carouselVariants = {
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

    // Animation variants for carousel items
    const carouselItemVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Carousel Column */}
                    <motion.div 
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={carouselVariants}
                    >
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 3000,
                                    stopOnMouseEnter: true,
                                    stopOnInteraction: false
                                }),
                            ]}
                            className="w-full max-w-xl mx-auto"
                        >
                            <CarouselContent>
                                {features.map((feature, index) => (
                                    <CarouselItem key={index}>
                                        <motion.div 
                                            className="space-y-6"
                                            initial="hidden"
                                            animate="visible"
                                            variants={carouselItemVariants}
                                        >
                                            <div className="relative h-[400px] rounded-2xl overflow-hidden">
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="text-center p-4">
                                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-slate-600">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
                            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
                        </Carousel>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div 
                        className="space-y-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={contentVariants}
                    >
                        <div>
                            <p className="font-bold mb-4 text-lg text-blue-600">
                                // WHY MALAYSIA
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                                Your Gateway to a Better Life
                            </h2>
                        </div>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Discover why Malaysia is the perfect choice for your
                            second home. From its strategic location to its
                            vibrant culture, Malaysia offers everything you need
                            for a fulfilling lifestyle. Explore our diverse
                            features and see what makes Malaysia special.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyMalaysia;