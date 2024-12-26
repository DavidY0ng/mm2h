"use client"

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Get the main element reference
    mainRef.current = document.querySelector('main');

    const toggleVisibility = () => {
      if (mainRef.current) {
        if (mainRef.current.scrollTop > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Add scroll event listener to the main element instead of window
    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', toggleVisibility);
      return () => mainElement.removeEventListener('scroll', toggleVisibility);
    }
  }, []);

  const scrollToTop = () => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 z-50 transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;