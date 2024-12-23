/* eslint-disable react/jsx-no-comment-textnodes */
"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="relative py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contact/city-bg.jpg"
          alt="City Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-bold mb-4 text-lg bg-gradient-to-r from-emerald-400 to-yellow-400 text-transparent bg-clip-text">
            // GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 max-w-4xl mx-auto">
            Ready to start your journey to Malaysia?
          </h2>
          <p className="text-xl text-slate-600 mt-4">Contact us today!</p>
        </div>

        {/* Contact Information Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <p className="text-slate-600">+6012</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <p className="text-slate-600">info@skywalkermm2h.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Address</p>
                  <p className="text-slate-600">[Your Address Here]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Follow us on Social Media</h3>
            <p className="text-slate-600">Stay updated with the latest MM2H news and tips:</p>
            <div className="space-y-6">
              <Link 
                href="https://facebook.com/SkywalkerMM2H" 
                target="_blank"
                className="flex items-center gap-4 hover:text-blue-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-slate-600 hover:text-blue-600">@SkywalkerMM2H</span>
              </Link>

              <Link 
                href="https://instagram.com/SkywalkerMM2H" 
                target="_blank"
                className="flex items-center gap-4 hover:text-pink-600 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-pink-500" />
                </div>
                <span className="text-slate-600 hover:text-pink-600">@SkywalkerMM2H</span>
              </Link>

              <Link 
                href="https://linkedin.com/company/skywalker-mm2h" 
                target="_blank"
                className="flex items-center gap-4 hover:text-blue-800 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-blue-700" />
                </div>
                <span className="text-slate-600 hover:text-blue-800">Skywalker MM2H Sdn Bhd</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;