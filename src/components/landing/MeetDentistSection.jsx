import React from "react";
import {
  Award,
  GraduationCap,
  Users,
  Star
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MeetDentistSection() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-blue-100 text-blue-700 mb-4">
            <Award className="w-4 h-4 mr-2" />
            Expert Care
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet <span className="text-blue-600">Dr. Hans Almanzar</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Leading cosmetic dentist with over 15 years of experience transforming smiles and lives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left Side - Doctor Image */}
          <div className="order-1 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <img
                  src="/doctor-image.jpg" // UPDATE THIS PATH with your uploaded doctor image
                  alt="Dr. Hans Almanzar - Lead Cosmetic Dentist"
                  className="w-full h-96 sm:h-[500px] object-cover rounded-xl"
                />
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">4.9/5 Patient Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Doctor Information */}
          <div className="space-y-8 order-2 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Excellence in Cosmetic Dentistry
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Dr. Hans Almanzar is a board-certified cosmetic dentist specializing in full-arch restorations and dental implants. 
                With a passion for transforming lives through beautiful smiles, he has successfully completed over 1,000 smile makeovers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Advanced Training</h4>
                  <p className="text-sm text-gray-600">Specialized in implant dentistry and full-arch rehabilitation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">1,000+ Patients</h4>
                  <p className="text-sm text-gray-600">Successfully transformed smiles across Port St. Lucie</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Award Winning</h4>
                  <p className="text-sm text-gray-600">Recognized for excellence in cosmetic dentistry</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">15+ Years</h4>
                  <p className="text-sm text-gray-600">Dedicated to perfecting smiles and restoring confidence</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <blockquote className="text-lg italic text-gray-800 mb-3">
                "My mission is simple: to give every patient the confidence that comes with a beautiful, healthy smile. 
                Every transformation is a life changed."
              </blockquote>
              <cite className="text-sm font-semibold text-blue-600">— Dr. Hans Almanzar</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

