import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Play,
  ArrowRight,
  Heart
} from "lucide-react";

export default function HeaderVideoSection() {
  const navigate = useNavigate();
  const goToQuiz = () => {
    navigate(createPageUrl('Quiz'));
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Life-Changing Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            The Procedure That{" "}
            <span className="text-yellow-400">Changed His Life</span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Watch this powerful transformation story and discover how one procedure 
            restored not just a smile, but complete confidence and quality of life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Video */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/HvZqxw_2INo"
                  title="The Procedure That Changed His Life - Patient Transformation Story"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video Badge */}
              <div className="absolute -top-3 -right-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                <Play className="w-3 h-3 inline mr-1" />
                WATCH NOW
              </div>
            </div>
          </div>

          {/* Right Side - Call to Action */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Your Transformation Starts Here
              </h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                Just like this patient, you deserve to feel confident about your smile. 
                Our proven procedures have helped over 1,000 patients reclaim their lives 
                and rediscover the joy of smiling without hesitation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-semibold mb-4 text-yellow-400">What You'll Discover:</h4>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  How one procedure transformed his entire life
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  The emotional journey from hiding to confidence
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  Why he wishes he had done it years earlier
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  The simple process that changed everything
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={goToQuiz}
              >
                Start Your Transformation Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-blue-200">
                ⏰ Free consultation available - Take our 60-second quiz to qualify
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
