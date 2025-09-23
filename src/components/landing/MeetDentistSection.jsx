import React from "react";
import {
  CheckCircle,
  Play,
  CreditCard,
  Scan
} from "lucide-react";

export default function MeetDentistSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Your <span className="text-blue-600">Dentist</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description & Offer */}
          <div className="space-y-6">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At St Lucie Center for Cosmetic Dentistry, we offer a range of Dental Implant options. 
                During your friendly consultation, we'll assess your specific requirements and create a customized treatment plan to align with your budget, bringing you closer to your ideal smile.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Arch Treatments Available</h3>
                  <p className="text-gray-600">Complete smile restoration solutions for multiple missing teeth.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Monthly Payment Plans</h3>
                  <p className="text-gray-600">Affordable financing options to make your dream smile accessible.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Scan className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Friendly Consultation including Free CBCT Scans & X-Rays</h3>
                  <p className="text-gray-600 font-semibold">($495 Value)</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8">
              <p className="text-sm text-gray-700 font-medium text-center">
                <strong>DISCLAIMER:</strong> Dental Implants are NOT Free or Covered by Medicare or Medicaid*
              </p>
            </div>
          </div>

          {/* Right Side - Doctor Video */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Watch our Short Video to learn more</h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1vQFii3kun0"
                title="Meet Your Dentist - Dr. Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
