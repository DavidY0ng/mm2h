import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="relative h-[940px] pt-[100px]">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/home/bg.jpg"
          alt="Background"
          fill
          priority
          className="object-filled"
        />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-700 leading-tight">
              Welcome to My Malaysia Second Home Program
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700">
              Your Gateway to a New Life in Malaysia
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              With the My Malaysia Second Home program, we are dedicated to making your transition 
              to living in Malaysia seamless, exciting, and hassle-free. Whether you're seeking 
              a retirement haven, a thriving business environment, or a vibrant lifestyle, 
              Malaysia offers numerous opportunities for expatriates to thrive.
            </p>
            
            <Button
              size="lg"
              className="relative px-[100px] rounded-md group overflow-hidden"
            >
              <span className="relative z-10 text-white">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-yellow-400" />
              <div className="absolute inset-0 bg-gradient-to-l from-emerald-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
            </Button>
          </div>
          
          {/* Right column - Images */}
          <div className="relative">
            {/* Main large center image */}
            <div className="relative w-[400px] h-[550px] rounded-full overflow-hidden mx-auto">
              <Image 
                src="/home/city-1.jpg" 
                alt="Beach chairs with umbrellas" 
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Top small image */}
            <div className="absolute -top-10 left-20 w-32 h-32 rounded-full overflow-hidden">
              <div className="relative w-full h-full">
                <Image 
                  src="/home/city-2.jpg"
                  alt="Resort view" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right small image */}
            <div className="absolute top-1/4 -right-3 w-40 h-40 rounded-full overflow-hidden">
              <div className="relative w-full h-full">
                <Image 
                  src="/home/city-3.jpg"
                  alt="Hotel exterior" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom small image */}
            <div className="absolute -bottom-10 left-1/5 w-52 h-52 rounded-full bg-white p-2">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="/home/city-4.jpg"
                  alt="Pool view" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
             {/* Decorative stars */}
             <div className="absolute -top-5 right-20 w-14 h-14">
              <Image 
                src="/home/star2.png"
                alt="Decorative star"
                width={60}
                height={60}
              />
            </div>
            <div className="absolute bottom-40 -left-8 w-14 h-14">
              <Image 
                src="/home/star1.png"
                alt="Decorative star"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;