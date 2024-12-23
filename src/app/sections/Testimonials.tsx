/* eslint-disable react/no-unescaped-entities */
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
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const testimonials = [
    {
        name: "John & Maria",
        location: "UK",
        text: "Skywalker MM2H made our retirement dream come true. The team's support was invaluable every step of the way.",
    },
    {
        name: "Li Wei",
        location: "China",
        text: "作为一名企业家,MM2H为我提供了绝佳的生活方式和平衡投资机会。强烈推荐!",
    },
    {
        name: "Hiroshi Tanaka",
        location: "Japan",
        text: "スカイウォーカーMM2Hは私たちの移住をスムーズにし、安心できるサービスを提供してくれました。マレーシアでの生活は最高です!",
    },
    {
        name: "Kim Min-Jae",
        location: "Korea",
        text: "MM2H 프로그램 덕분에 가족과 함께 말레이시아에서의 새로운 시작을 순조롭게 시작할 수 있었습니다. 훌륭한 서비스에 감사드립니다!",
    },
    {
        name: "Anson Wong",
        location: "Hong Kong",
        text: "Skywalker MM2H讓我在馬來西亞找到理想的家,專業團隊提供了全方位支持,讓一切都變得簡單。",
    },
];

const TestimonialCard = ({ name, location, text }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative h-[300px] p-8 rounded-3xl overflow-hidden max-w-sm mx-auto"
    >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
            <Image
                src="/testimonials/bg.jpg"
                alt="Background"
                fill
                className="object-cover"
            />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col">
            {/* Name and Location at top */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">{name}</h3>
                <p className="text-blue-600">{location}</p>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-slate-800 text-lg">"{text}"</blockquote>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const { t } = useTranslation("home");

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
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <p className="font-bold mb-4 text-lg text-transparent bg-[linear-gradient(270deg,#E8B00B_0%,#04B07D_100%)] bg-clip-text">
                        // {t("testimonial.header")}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 max-w-4xl mx-auto">
                        {t("testimonial.title1")}{" "}
                        <span className="block">
                            {" "}
                            {t("testimonial.title2")}
                        </span>
                    </h2>
                </motion.div>

                {/* Testimonial Carousel Container */}
                <motion.div 
                    className="flex justify-center relative px-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-full max-w-[1200px]">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="relative"
                        >
                            <CarouselContent className="-ml-2">
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="pl-2 sm:basis-full md:basis-1/2 lg:basis-1/3"
                                    >
                                        <TestimonialCard {...testimonial} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 hover:bg-blue-100 transition-colors" />
                            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 hover:bg-blue-100 transition-colors" />
                        </Carousel>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;