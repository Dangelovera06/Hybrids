import React from "react";
import { Star, CheckCircle, Users } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-500 fill-current" />
            </div>
            <div className="text-3xl font-bold text-gray-900">4.9</div>
            <div className="text-sm text-gray-600">Rating</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">1,132</div>
            <div className="text-sm text-gray-600">Smiles Transformed</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">10+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">Same Day</div>
            <div className="text-sm text-gray-600">Results</div>
          </div>
        </div>
      </div>
    </section>
  );
}
