import React from "react";

export default function ProblemSolutionBridge() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              It's More Than Just Teeth. It's Your Quality of Life.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're missing more than one tooth, feel unhappy with your smile, or sense that your oral hygiene is affecting your day-to-day health and confidence—know that a solution is within reach. The right treatment doesn't just restore your smile; it restores your well-being.
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">😊</span>
                  </div>
                  <p className="text-gray-600 font-medium">Happy Family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}