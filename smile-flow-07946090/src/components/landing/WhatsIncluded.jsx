
import React from "react";
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scan,
  Eye, 
  UserCheck,
  Gift,
  CheckCircle,
  ArrowRight, // This icon will be removed from the button
  Sparkles
} from "lucide-react";

export default function WhatsIncluded() {
  const includedItems = [
    {
      icon: Scan,
      title: "3D CT Scan",
      value: "$250",
      description: "Advanced imaging to see every detail of your jaw structure and plan the perfect solution."
    },
    {
      icon: Eye,
      title: "Smile Simulation",
      value: "$125", 
      description: "See exactly how your new smile will look before we begin treatment."
    },
    {
      icon: UserCheck,
      title: "Expert Full-Arch Evaluation",
      value: "$120",
      description: "Comprehensive consultation with our experienced cosmetic dentist."
    }
  ];

  const totalValue = 495;

  const navigate = useNavigate();
  const goToQuiz = () => {
    navigate(createPageUrl('Quiz'));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-700 mb-4">
            <Gift className="w-4 h-4 mr-2" />
            Limited Time Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You Get —{" "}
            <span className="text-green-600">Completely Free</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This comprehensive consultation normally costs $495. 
            This month, it's completely free with no strings attached.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {includedItems.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {item.value} Value
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Total Value Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-base text-gray-700">Total Package Value</p> {/* Changed from text-lg to text-base */}
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-2xl font-bold text-gray-400 line-through"> {/* Changed from text-3xl to text-2xl */}
                      ${totalValue}
                    </span>
                    <span className="text-3xl font-bold text-green-600"> {/* Changed from text-4xl to text-3xl */}
                      FREE
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What Happens During Your Visit?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Complete oral health assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Advanced 3D imaging and measurements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Digital smile preview and design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Personalized treatment plan and timeline</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Financing and insurance guidance</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center"> {/* Added div for button centering */}
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-base w-full max-w-xs" // Updated classes for mobile optimization
                  onClick={goToQuiz}
                >
                  <Gift className="w-4 h-4 mr-2" /> {/* Changed icon size from w-5 h-5 to w-4 h-4 */}
                  Yes, I Want My Free Smile Preview
                  {/* <ArrowRight className="w-5 h-5 ml-2" /> Removed ArrowRight icon */}
                </Button>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                No obligation. No pressure. Just honest answers and expert guidance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Urgency Reminder */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-red-50 text-red-700 rounded-full border border-red-200">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3" />
            <span className="font-medium">Only 7 free appointments available this month</span>
          </div>
        </div>
      </div>
    </section>
  );
}
