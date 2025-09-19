import React from "react";

export default function ProblemSolutionBridge() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              It's More Than Just Teeth. It's Your Quality of Life.
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Whether you're missing more than one tooth, feel unhappy with your smile, or sense that your oral hygiene is affecting your day-to-day health and confidence—know that a solution is within reach.
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb22ce16a6085c07946090/26e606aa1_familypic.png"
                alt="Happy family enjoying quality time together"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}