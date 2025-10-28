import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Play,
  ArrowRight,
  CheckCircle,
  Calendar
} from "lucide-react";

export default function ConsultationVideoSection() {
  const navigate = useNavigate();
  const goToQuiz = () => {
    navigate(createPageUrl('Quiz'));
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-blue-100 text-blue-700 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Free Consultation
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What to Expect During Your{" "}
            <span className="text-blue-600">Free Consultation</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            See exactly what happens during your complimentary consultation and why 
            thousands of patients choose our practice for their smile transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Video */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-white rounded-2xl p-4 sm:p-6 shadow-xl">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YgbXkB9T3Vo"
                  title="What to Expect During Your Free Consultation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Badge */}
              <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                <Play className="w-3 h-3 inline mr-1" />
                WATCH
              </div>
            </div>
          </div>

          {/* Right Side - Consultation Benefits */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Your Consultation Experience
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                During your complimentary consultation, you'll receive a comprehensive evaluation 
                and personalized treatment plan. No pressure, no sales pitch - just honest, 
                expert guidance to help you make the best decision for your smile.
              </p>
            </div>

            {/* Video Title */}
            <div className="mb-4">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
                What to Expect During Your Free Consultation
              </h4>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Comprehensive Examination</h4>
                  <p className="text-sm text-gray-600">Complete oral health assessment and 3D imaging</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Personalized Treatment Plan</h4>
                  <p className="text-sm text-gray-600">Custom solutions tailored to your specific needs and goals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                  <p className="text-sm text-gray-600">Clear cost breakdown with flexible financing options</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">No Pressure Environment</h4>
                  <p className="text-sm text-gray-600">Take your time to make the right decision for you</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Ready to Get Started?</h4>
              <p className="text-gray-600 mb-4">
                Take our quick 60-second quiz to see if you qualify for your free consultation.
              </p>
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 shadow-blue-500/25 hover:shadow-blue-500/40 ring-2 ring-blue-500/20 hover:ring-blue-500/30"
                onClick={goToQuiz}
              >
                Start My Free Quiz
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
