
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
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              You Could Have a{" "}
              <span className="text-blue-600 relative">
                New Smile
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-200/50 -z-10" />
              </span>{" "}
              in <span className="underline">1 Day</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              <span className="underline">Trusted by 1,000+ patients.</span> Our FREE Full-Arch Smile Preview includes a{" "}
              <strong className="text-gray-900">3D CT Scan, Smile Simulation, and Expert Evaluation</strong>{" "}
              — normally <span className="underline decoration-blue-800 font-semibold text-gray-800">$495</span>, yours <span className="underline decoration-blue-800 font-semibold text-gray-800">FREE</span> this month only.
            </p>

            {/* Social Proof Quick Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">4.9 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">1,000+ Patients</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Same-Day Results</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={goToQuiz}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get My Free Smile Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-gray-500">
                ⏰ Take our 60-second quiz to qualify
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Hero Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb22ce16a6085c07946090/f3d177ba7_faslc.png"
                alt="Before and after smile transformation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4 border hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">1,132</p>
                  <p className="text-sm text-gray-600">Smiles Transformed</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-white rounded-lg shadow-lg p-4 border hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-yellow-600 fill-current" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 line-through">$495</p>
                  <p className="text-sm text-green-600 font-bold">Value - FREE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
