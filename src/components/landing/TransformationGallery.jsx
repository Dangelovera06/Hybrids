import React from "react";
import { InfiniteSliderBasic } from "@/components/ui/infinite-slider-demo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Sparkles,
  ArrowRight,
  Star
} from "lucide-react";

export default function TransformationGallery() {
  const navigate = useNavigate();
  const goToQuiz = () => {
    navigate(createPageUrl('Quiz'));
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-blue-100 text-blue-700 mb-4">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Real Patient Results
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See the Amazing{" "}
            <span className="text-blue-600">Transformations</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            These are real before and after photos from our patients who trusted us with their smile transformation. 
            Each story represents a life changed and confidence restored. Hover over the images to slow down and take a closer look.
          </p>
        </div>

        {/* Infinite Slider Gallery */}
        <div className="mb-8 sm:mb-12">
          <InfiniteSliderBasic />
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Join over 1,000+ patients who have transformed their smiles and lives. 
              Your journey to a confident smile starts with a free consultation.
            </p>
            
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={goToQuiz}
            >
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Start My Free Consultation
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
            </Button>
            
            <p className="text-xs sm:text-sm text-gray-500 mt-3">
              ⏰ Take our 60-second quiz to see if you qualify
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
