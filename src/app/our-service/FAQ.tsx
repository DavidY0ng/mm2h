/* eslint-disable react/jsx-no-comment-textnodes */
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";

const FAQSection = () => {
    const faqs = [
        {
            question:
                "What happens if I don't meet the minimum residency requirement?",
            answer: "If you fail to meet the 90-day residency requirement, your visa may not be renewed. However, exceptions can sometimes be granted for extenuating circumstances. We can guide you through the appeal process if needed.",
        },
        {
            question: "Can I upgrade my tier within the MM2H program?",
            answer: "Yes, you can upgrade your tier at any time by meeting the financial and property requirements for the desired level. We will assist with the application for the upgrade.",
        },
        {
            question:
                "Are there any restrictions on the type of property I can purchase?",
            answer: "While participants can purchase most residential properties, certain states may impose restrictions on foreign ownership of specific property types or areas. We provide guidance based on your preferences and the applicable laws.",
        },
        {
            question: "How can I include my maid in the visa application?",
            answer: "Platinum-level participants can sponsor a maid's visa. We assist with the documentation and processes required for this inclusion.",
        },
        {
            question:
                "Can my children work in Malaysia under the MM2H program?",
            answer: "Children under the MM2H visa are not permitted to work. However, they can explore work opportunities by applying for a separate employment visa once they reach the eligible age.",
        },
        {
            question:
                "Are MM2H participants allowed to start businesses in Malaysia?",
            answer: "Only Platinum-level participants can engage in business activities. Business registration and compliance with Malaysian regulations are required.",
        },
        {
            question:
                "Can I apply for permanent residency through the MM2H program?",
            answer: "MM2H does not directly lead to permanent residency. However, long-term participants can explore other pathways to PR through investment or family ties.",
        },
    ];

    // Animation variants for header
    const headerVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    // Animation variants for FAQ container
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    // Animation variants for individual FAQ items
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
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
                    <p className="font-bold mb-4 text-lg text-blue-600">
                        // FREQUENTLY ASKED QUESTIONS
                    </p>
                    <h2 className="text-4xl font-bold text-slate-800 mb-6">
                        Common Questions About MM2H
                    </h2>
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="border rounded-lg px-6 shadow-sm bg-white"
                                >
                                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
