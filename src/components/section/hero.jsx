// src/components/section/hero.jsx

import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
          Welcome to ThoughtSpace
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Your personal platform for capturing, organizing, and sharing your thoughts.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition ease-in-out duration-150">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-semibold rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition ease-in-out duration-150">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        {/* Placeholder for background visual */}
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect width="100" height="100" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
