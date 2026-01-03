import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full opacity-50 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[20%] right-[10%] w-48 h-48 bg-pink-200 dark:bg-pink-900 rounded-full opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Capture Your
              <span className="block text-blue-600 dark:text-blue-400">Thoughts.</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
              ThoughtSpace is your personal corner of the internet to write, reflect, and share your ideas.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link href="/register">
                <Button size="lg" className="text-lg">
                  Get Started for Free
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-48 h-48 bg-white dark:bg-gray-800 rounded-full transform rotate-45"></div>
              <div className="absolute w-64 h-64 bg-white dark:bg-gray-800 rounded-lg transform -rotate-12 shadow-lg"></div>
              <div className="absolute w-32 h-32 top-0 left-0 bg-white dark:bg-gray-800 rounded-full transform translate-x-12 translate-y-12"></div>
              <div className="absolute w-40 h-40 bottom-0 right-0 bg-white dark:bg-gray-800 rounded-lg transform -translate-x-12 -translate-y-12 rotate-12 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
