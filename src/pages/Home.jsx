
import React from "react";
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  CheckCircle,
  Users,
  Award,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  Smile,
  Heart,
  Shield } from
"lucide-react";

import HeroSection from "../components/landing/HeroSection";
import StatsSection from "../components/landing/StatsSection";
import ProblemSolutionBridge from "../components/landing/ProblemSolutionBridge";
import TreatmentOptions from "../components/landing/TreatmentOptions";
import SocialProofSection from "../components/landing/SocialProofSection";
import WhatsIncluded from "../components/landing/WhatsIncluded";
import FuturePaceSection from "../components/landing/FuturePaceSection";
import FAQSection from "../components/landing/FAQSection";

export default function Home() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const goToQuiz = () => {
    navigate(createPageUrl('Quiz'));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb22ce16a6085c07946090/2ab4892a3_favicon.png" alt="St. Lucie Center Logo" className="h-8 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('treatments')}
                className="text-gray-600 hover:text-blue-600 transition-colors">

                Treatments
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-600 hover:text-blue-600 transition-colors">

                Patient Stories
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-blue-600 transition-colors">

                FAQ
              </button>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>(772) 465-2825</span>
              </div>
            </div>
            <Button
              onClick={goToQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white">

              Start My Quiz
            </Button>
          </div>
        </div>
      </nav>

      {/* Page Sections */}
      <HeroSection />
      <StatsSection />
      <ProblemSolutionBridge />
      <TreatmentOptions />
      <WhatsIncluded />
      <SocialProofSection />
      <FuturePaceSection />
      <FAQSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb22ce16a6085c07946090/2ab4892a3_favicon.png" alt="St. Lucie Center Logo" className="h-10 w-auto bg-white p-1 rounded-md" />
                 <span className="font-bold text-lg">St. Lucie Center</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming smiles and lives in Port St. Lucie since 2015.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(772) 465-2825</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Port St. Lucie, FL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 8AM-6PM</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>All-on-4 Implants</li>
                <li>Single Implants</li>
                <li>Implant-Supported Dentures</li>
                <li>Smile Makeovers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Why Choose Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>1,000+ Successful Cases</li>
                <li>4.9⭐ Google Rating</li>
                <li>Same-Day Solutions</li>
                <li>Lifetime Warranty</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 St. Lucie Center for Cosmetic Dentistry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

}
