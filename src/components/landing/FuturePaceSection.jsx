
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera,
  Utensils, 
  UserX,
  Heart,
  Briefcase,
  Sparkles
} from "lucide-react";

export default function FuturePaceSection() {
  const scenarios = [
    {
      icon: Camera,
      title: "Social Anxiety",
      description: "Hiding your smile during family photos or feeling self-conscious when you laugh.",
      quote: "I used to hate pictures."
    },
    {
      icon: Utensils,
      title: "Eating Difficulties",
      description: "Avoiding your favorite foods because they're difficult or painful to chew.",
      quote: "I missed eating normally."
    },
    {
      icon: UserX,
      title: "Lost Confidence",
      description: "Feeling insecure in professional settings or shying away from meeting new people.",
      quote: "It really affected my career."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-blue-100 text-blue-700 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Sound Familiar?
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stop Letting Dental Problems{" "}
            <span className="text-blue-600">Control Your Life</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            These issues affect more than just your teeth—they impact your confidence, relationships, and daily joy. You're not alone in feeling this way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {scenarios.map((scenario, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <scenario.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {scenario.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {scenario.description}
                </p>
                <div className="text-sm text-gray-500 italic border-l-2 border-blue-200 pl-3">
                  "{scenario.quote}"
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emotional Impact Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              The Ripple Effect of an Unresolved Problem
            </h3>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                  <Camera className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600 mr-2" />
                  In Your Personal Life
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-gray-600 text-xs sm:text-sm">
                  <li>• Covering your mouth when you laugh or speak</li>
                  <li>• Hiding from photos or smiling with your mouth closed</li>
                  <li>• Feeling self-conscious or less attractive</li>
                  <li>• Losing the simple joy of eating your favorite foods</li>
                </ul>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                  <Briefcase className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 mr-2" />
                  In Your Career & Social Life
                </h4>
                <ul className="space-y-1 sm:space-y-2 text-gray-600 text-xs sm:text-sm">
                  <li>• Worrying about making a bad first impression</li>
                  <li>• Lacking confidence in professional meetings</li>
                  <li>• Hesitancy in dating or forming new relationships</li>
                  <li>• Feeling that your smile doesn't reflect who you are inside</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl">
              <p className="text-base sm:text-lg text-gray-800 italic">
                "The biggest regret our patients have is waiting so long. 
                Your solution is closer than you think."
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                — Dr. Hans Almanzar, St. Lucie Center for Cosmetic Dentistry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
