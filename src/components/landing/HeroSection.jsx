
import React from "react";
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  CheckCircle,
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function HeroSection() {
  const navigate = useNavigate();
  const goToQuiz = () => {
    navigate(createPageUrl('Quiz'));
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              You Could Have a{" "}
              <span className="text-blue-600 relative">
                New Smile
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-blue-200/50 -z-10" />
              </span>{" "}
              in <span className="underline">1 Day</span>
            </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            <span className="underline">Trusted by 1,000+ patients.</span> Our FREE Full-Arch Smile Preview includes a{" "}
            <strong className="text-gray-900">3D CT Scan, Smile Simulation, and Expert Evaluation</strong>{" "}
            — normally <span className="underline decoration-blue-800 font-semibold text-gray-800">$495</span>, yours <span className="underline decoration-blue-800 font-semibold text-gray-800">FREE</span> this month only.
          </p>

          {/* Video Title */}
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center lg:text-left">
              The Procedure That Changed His Life
            </h3>
          </div>

          {/* VSL Video Container */}
          <div className="relative mb-6">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-black">
              {/* Wistia Video Player */}
              <div className="relative">
                <wistia-player
                  media-id="bj6epe6th1"
                  aspect="1.7777777777777777"
                  className="w-full"
                ></wistia-player>
              </div>

              {/* Price Overlay */}
              <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-white/95 backdrop-blur-sm text-gray-900 px-2 sm:px-3 py-1 sm:py-2 rounded-md shadow-xl border border-gray-200 z-10">
                <div className="text-center">
                  <div className="text-xs text-gray-600 font-medium">Normally $495</div>
                  <div className="text-xs sm:text-sm font-bold text-red-600">FREE Today</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-3 sm:space-y-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 shadow-blue-500/25 hover:shadow-blue-500/40 ring-2 ring-blue-500/20 hover:ring-blue-500/30"
              onClick={goToQuiz}
            >
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Get My Free Smile Consultation</span>
              <span className="sm:hidden">Get Free Consultation</span>
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
            </Button>
            <p className="text-sm text-gray-500">
              ⏰ Take our 60-second quiz to qualify
            </p>
          </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* Empty space or additional content can go here */}
          </div>
        </div>
      </div>
    </section>
  );
}
