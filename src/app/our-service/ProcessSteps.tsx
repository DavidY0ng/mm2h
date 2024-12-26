/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const ProcessSteps = () => {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        {
            number: 1,
            title: "Contact Us",
            description:
                "Schedule a free consultation to discuss your eligibility and goals.",
        },
        {
            number: 2,
            title: "Signing Letter of Intent",
            description:
                "Agree to appoint Skywalker (MM2H) Sdn Bhd as your application agent and pay a 20% upfront participation fee.",
        },
        {
            number: 3,
            title: "Document Preparation",
            description:
                "Our team will assist you in gathering and organizing all necessary paperwork, ensuring accuracy and compliance.",
        },
        {
            number: 4,
            title: "Application Submission",
            description:
                "We handle all communications with the relevant authorities and submit your application. Once submitted, you will receive an acknowledgment receipt.",
        },
        {
            number: 5,
            title: "Approval",
            description:
                "Wait for your application to be processed. Upon approval, you will receive an official approval letter. The remaining balance of the payment must be settled within 14 days.",
        },
        {
            number: 6,
            title: "Pre-Relocation Procedures",
            description:
                "Our experts guide you through essential pre-relocation tasks, including opening a Malaysian bank account, providing proof of property purchase, undergoing a medical examination, and securing the required insurance.",
        },
        {
            number: 7,
            title: "Visa Stamping",
            description:
                "Finalize the process with the visa stamping procedure, enabling you and your family to officially begin your new life in Malaysia.",
        },
    ];

    // Animation variants for header
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

    // Animation variants for step content
    const contentVariants = {
        enter: { 
            opacity: 0,
            x: 20
        },
        center: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    return (
        <section className="relative py-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/our-service/steps-bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                >
                    <p className="font-bold mb-4 text-lg text-blue-600">
                        // HOW TO GET STARTED
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        Your Journey to Malaysia Begins Here
                    </h2>
                </motion.div>

                {/* Steps Container */}
                <motion.div 
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Steps Navigation */}
                    <div className="flex items-center justify-between mb-8 relative w-full max-w-2xl mx-auto">
                        {/* Step Numbers */}
                        <div className="relative flex justify-between w-full px-4">
                            {steps.map((step) => (
                                <motion.button
                                    key={step.number}
                                    onClick={() => setActiveStep(step.number)}
                                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 relative z-10
                                    ${
                                        step.number === activeStep
                                            ? "bg-blue-600 text-white border-2 border-blue-600"
                                            : step.number < activeStep
                                            ? "bg-blue-600 text-white border-2 border-blue-600"
                                            : "bg-white text-slate-400 border-2 border-slate-200"
                                    }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {step.number}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Active Step Content */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                        {/* Fixed height container */}
                        <div className="h-[150px] relative">
                            <AnimatePresence mode="wait">
                                {steps.map(
                                    (step) =>
                                        step.number === activeStep && (
                                            <motion.div
                                                key={step.number}
                                                className="absolute inset-0"
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                variants={contentVariants}
                                            >
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-blue-50 text-blue-600">
                                                        {step.number}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-slate-800">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <div className="overflow-y-auto h-[100px] pl-16 pr-4">
                                                    <p className="text-slate-600 leading-relaxed">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-6 pl-16">
                            <Button
                                variant="outline"
                                onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
                                disabled={activeStep === 1}
                            >
                                Prev
                            </Button>
                            <Button
                                onClick={() => setActiveStep((prev) => Math.min(prev + 1, steps.length))}
                                disabled={activeStep === steps.length}
                                className="flex items-center gap-2"
                            >
                                {activeStep === steps.length ? "Done" : "Next"}
                                {activeStep !== steps.length && (
                                    <ChevronRight className="w-4 h-4" />
                                )}
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessSteps;