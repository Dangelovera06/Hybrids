
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Clock,
  Menu,
  X
} from "lucide-react";

import HeroSection from "../components/landing/HeroSection";
import MeetDentistSection from "../components/landing/MeetDentistSection";
import DoctorVideoSection from "../components/landing/DoctorVideoSection";
import ProblemSolutionBridge from "../components/landing/ProblemSolutionBridge";
import TreatmentOptions from "../components/landing/TreatmentOptions";
import SocialProofSection from "../components/landing/SocialProofSection";
import TransformationGallery from "../components/landing/TransformationGallery";
import WhatsIncluded from "../components/landing/WhatsIncluded";
import FuturePaceSection from "../components/landing/FuturePaceSection";
import FAQSection from "../components/landing/FAQSection";
import ConsultationVideoSection from "../components/landing/ConsultationVideoSection";

export default function Home() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
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
            
            {/* Desktop Navigation */}
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

            {/* Mobile Navigation */}
            <div className="flex items-center space-x-3">
              <Button
                onClick={goToQuiz}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2">
                <span className="hidden sm:inline">Start My Quiz</span>
                <span className="sm:hidden">Quiz</span>
              </Button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
              <div className="px-4 py-3 space-y-3">
                <button
                  onClick={() => scrollToSection('treatments')}
                  className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2">
                  Treatments
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2">
                  Patient Stories
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors py-2">
                  FAQ
                </button>
                <div className="flex items-center space-x-2 text-sm text-gray-600 py-2">
                  <Phone className="w-4 h-4" />
                  <span>(772) 465-2825</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Sections */}
      <HeroSection />
      <MeetDentistSection />
      <DoctorVideoSection />
      <ProblemSolutionBridge />
      <SocialProofSection />
      <TransformationGallery />
      <TreatmentOptions />
      <WhatsIncluded />
      <FuturePaceSection />
      <ConsultationVideoSection />
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
    </div>
  );
}
