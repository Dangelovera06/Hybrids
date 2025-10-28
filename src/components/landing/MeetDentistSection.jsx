import React from "react";
import { Award, Star } from "lucide-react";
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
                  src="/doc.png"
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
          <div className="space-y-6 order-2 lg:order-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Dr. Hans Almanzar DDS, FAAIP, MICOI
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Dr. Hans Almanzar graduated dental school in 2013 and spent an additional 2 years at New York Langone Hospitals (NYU) 
                obtaining an Advanced Education in General Dentistry with a focus on Oral Surgery. He holds prestigious certifications as 
                a Master of The International Congress of Oral Implantologists and Fellow of American Academy of Implant Prosthodontics.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-4">
                With over 450 hours of continued education in implant sinus lifts, cosmetic dentistry, and restorative dentistry, 
                Dr. Almanzar provides comprehensive implant dentistry and Invisalign services. He and his wife Kelsi are passionate 
                about helping people through dentistry, having participated in dental missions to Jamaica and Guatemala while 
                providing free dental care to those in need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

