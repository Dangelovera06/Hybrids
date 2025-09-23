
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Quote,
  Play,
  Heart,
  Star,
  Award
} from "lucide-react";

export default function SocialProofSection() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      age: "52",
      location: "Port St. Lucie",
      quote: "I finally love my smile. I wish I had done this years ago!",
      treatment: "All-on-4",
      image: "M"
    },
    {
      name: "Robert Johnson",
      age: "61", 
      location: "Stuart",
      quote: "People think I'm 10 years younger. The confidence is incredible.",
      treatment: "Full Arch",
      image: "R"
    },
    {
      name: "Linda Chen",
      age: "48",
      location: "Jensen Beach", 
      quote: "From hiding my smile to laughing freely in just 30 days.",
      treatment: "All-on-4",
      image: "L"
    }
  ];


  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Patients. Real{" "}
            <span className="text-blue-600">Transformations.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't take our word for it. Here's what our patients are saying about their life-changing experiences.
          </p>
        </div>


        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                  <p className="text-gray-800 font-medium text-lg italic pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-blue-700">
                        {testimonial.image}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        Age {testimonial.age}, {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {testimonial.treatment}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center mt-4 pt-4 border-t">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Watch Real Patient Stories
            </h3>
            <p className="text-gray-600">
              See the emotional transformations and hear directly from patients about their journey.
            </p>
          </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/wNI9Y1LZCO8"
                        title="Patient Testimonial Video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>

            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Patient Testimonial Video 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-600">Trusted by 1000+ families</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="text-sm text-gray-600">Award-winning practice</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">4.9/5 patient satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
