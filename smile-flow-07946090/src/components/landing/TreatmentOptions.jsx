import React from "react";
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Star,
  SmilePlus, 
  Smile,
  Crown,
  ArrowRight
} from "lucide-react";

export default function TreatmentOptions() {
  const treatments = [
    {
      image: null,
      title: "Single Dental Implant",
      price: "$3,999",
      description: "Natural-looking, permanent replacement",
      features: [
        "Easy to maintain, lifetime durability",
        "Ideal for 1 missing tooth",
        "Preserves surrounding teeth"
      ],
      note: "May require bone grafting or sedation based on needs.",
      color: "blue",
      popular: false,
      icon: Smile
    },
    {
      image: null,
      title: "Implant-Supported Denture",
      price: "$14,500",
      description: "Secured by up to 4 implants — no slipping",
      features: [
        "Improved chewing + confidence",
        "Preserves jaw bone",
        "More stable than traditional dentures"
      ],
      note: "Great for multiple missing teeth needing stability.",
      color: "green",
      popular: false,
      icon: SmilePlus
    },
    {
      image: null,
      title: "All-on-4 Fixed Full Arch",
      price: "$14,995",
      description: "Full-smile restoration in one visit",
      features: [
        "Our most durable, long-term solution",
        "Looks and feels like natural teeth",
        "Same-day transformation possible"
      ],
      note: "Most popular option for complete smile makeovers.",
      color: "purple",
      popular: true,
      icon: Crown
    }
  ];

  const navigate = useNavigate();
  const goToQuiz = () => {
    navigate(createPageUrl('Quiz'));
  };

  return (
    <section id="treatments" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Which Smile Transformation{" "}
            <span className="text-blue-600">Is Right for You?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every patient is unique. We offer three proven solutions to restore your smile 
            and confidence, each tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${treatment.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {treatment.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-blue-600 text-white rounded-tl-none rounded-br-none">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  treatment.color === 'blue' ? 'bg-blue-100' :
                  treatment.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                }`}>
                  <treatment.icon className={`w-8 h-8 ${
                    treatment.color === 'blue' ? 'text-blue-600' :
                    treatment.color === 'green' ? 'text-green-600' : 'text-purple-600'
                  }`} />
                </div>
                <CardTitle className="text-xl mb-2">{treatment.title}</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  Starting from {treatment.price}
                </div>
                <p className="text-gray-600">{treatment.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {treatment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600 italic">
                    {treatment.note}
                  </p>
                </div>

                <Button 
                  className="w-full"
                  variant={treatment.popular ? "default" : "outline"}
                  onClick={goToQuiz}
                >
                  Start The 60-Second Quiz
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={goToQuiz}
          >
            Start My Free 60-Second Quiz
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="mt-4 text-gray-600">
            Not sure which option is right for you? Our 60-second quiz will help determine the best solution.
          </p>
        </div>
      </div>
    </section>
  );
}