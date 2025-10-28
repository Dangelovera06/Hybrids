import React from "react";

export default function ProblemSolutionBridge() {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              It's More Than Just Teeth. It's Your Quality of Life.
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Whether you're missing more than one tooth, feel unhappy with your smile, or sense that your oral hygiene is affecting your day-to-day health and confidence—know that a solution is within reach.
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <img
                src="/Screenshot%202025-10-28%20at%2011.19.10%20AM.png"
                alt="Happy patient with beautiful smile showing quality of life transformation"
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
                onError={(e) => {
                  console.log('Screenshot failed to load, trying fallback');
                  e.target.src = "/logo.svg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}