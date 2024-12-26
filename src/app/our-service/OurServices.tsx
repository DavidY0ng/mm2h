"use client";

import React from 'react';
import { motion } from "motion/react";
import { FileText, Home, Scale, Stethoscope, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OurServices = () => {
  const services = [
    {
      title: "MM2H Application Assistance",
      description: "From eligibility assessments to final approvals, we handle every step of your MM2H application.",
      icon: FileText
    },
    {
      title: "Relocation Services",
      description: "We assist with finding accommodations, opening bank accounts, and connecting you to local communities.",
      icon: Home
    },
    {
      title: "Legal & Financial Advisory",
      description: "Our experts guide you through Malaysian legal and tax requirements, ensuring compliance and peace of mind.",
      icon: Scale
    },
    {
      title: "Education & Healthcare Guidance",
      description: "We provide insights into Malaysia's top international schools and healthcare systems to suit your family's needs.",
      icon: Stethoscope
    },
    {
      title: "Custom Packages",
      description: "Tailored solutions for retirees, entrepreneurs, and families based on your unique requirements.",
      icon: Package
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column - Title */}
          <motion.div 
            className="lg:col-span-3 lg:sticky lg:top-20 self-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 font-bold text-lg mb-4">// OUR SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Comprehensive Support for Your Journey
            </h2>
          </motion.div>

          {/* Right Column - Service Cards */}
          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;