
import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  CheckCircle,
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function HeroSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Set up Wistia video tracking
  useEffect(() => {
    const setupWistiaTracking = () => {
      if (typeof window !== 'undefined' && window.Wistia) {
        window.Wistia.api("bj6epe6th1", function(video) {
        // Track video play
        video.bind("play", function() {
          if (window.fbq) {
            window.fbq('trackCustom', 'VideoPlay', {
              video_title: 'The Procedure That Changed His Life',
              video_type: 'VSL',
              video_id: 'bj6epe6th1'
            });
          }
        });

        // Track 25% watched
        video.bind("secondchange", function(s) {
          const percent = Math.round((s / video.duration()) * 100);
          if (percent === 25 && !video._tracked25) {
            video._tracked25 = true;
            if (window.fbq) {
              window.fbq('trackCustom', 'VideoProgress', {
                video_title: 'The Procedure That Changed His Life',
                progress: '25%',
                video_id: 'bj6epe6th1'
              });
            }
          }
          if (percent === 50 && !video._tracked50) {
            video._tracked50 = true;
            if (window.fbq) {
              window.fbq('trackCustom', 'VideoProgress', {
                video_title: 'The Procedure That Changed His Life',
                progress: '50%',
                video_id: 'bj6epe6th1'
              });
            }
          }
          if (percent === 75 && !video._tracked75) {
            video._tracked75 = true;
            if (window.fbq) {
              window.fbq('trackCustom', 'VideoProgress', {
                video_title: 'The Procedure That Changed His Life',
                progress: '75%',
                video_id: 'bj6epe6th1'
              });
            }
          }
        });

        // Track video completion
        video.bind("end", function() {
          if (window.fbq) {
            window.fbq('trackCustom', 'VideoComplete', {
              video_title: 'The Procedure That Changed His Life',
              video_type: 'VSL',
              video_id: 'bj6epe6th1'
            });
          }
        });
      });
      } else {
        // Wait for Wistia to load
        setTimeout(setupWistiaTracking, 1000);
      }
    };

    // Initial setup
    setupWistiaTracking();
    
    // Also listen for Wistia ready event
    if (typeof window !== 'undefined') {
      window._wq = window._wq || [];
      window._wq.push({
        id: "bj6epe6th1",
        onReady: function(video) {
          console.log('Wistia video ready for tracking');
          // Set up tracking when video is ready
          if (window.fbq) {
            video.bind("play", function() {
              window.fbq('trackCustom', 'VideoPlay', {
                video_title: 'The Procedure That Changed His Life',
                video_type: 'VSL',
                video_id: 'bj6epe6th1'
              });
              console.log('Video play event tracked');
            });
          }
        }
      });
    }
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="max-w-4xl w-full text-center">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              The Solution To{" "}
              <span className="text-blue-600 relative">
                Missing Teeth
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-blue-200/50 -z-10" />
              </span>{" "}
              and <span className="underline">Loose Dentures</span>
            </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            <span className="underline">Trusted by 1,000+ patients.</span> Our FREE Full-Arch Smile Preview includes a{" "}
            <strong className="text-gray-900">3D CT Scan ($395 value), Smile Simulation, and Expert Evaluation</strong>{" "}
            — normally <span className="underline decoration-blue-800 font-semibold text-gray-800">$495</span>, yours <span className="underline decoration-blue-800 font-semibold text-gray-800">FREE</span> this month only.
          </p>

            {/* Video Title */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                The Procedure That Changed His Life
              </h3>
            </div>

            {/* VSL Video Container */}
            <div className="relative mb-8">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-black max-w-3xl mx-auto">
                {/* Wistia Video Player */}
                <div className="relative">
                  <wistia-player
                    media-id="bj6epe6th1"
                    aspect="1.7777777777777777"
                    className="w-full"
                  ></wistia-player>
                </div>

                {/* Price Overlay */}
                <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-white/95 backdrop-blur-sm text-gray-900 px-2 sm:px-3 py-1 sm:py-2 rounded-md shadow-xl border border-gray-200 z-10">
                  <div className="text-center">
                    <div className="text-xs text-gray-600 font-medium">Normally $495</div>
                    <div className="text-xs sm:text-sm font-bold text-red-600">FREE Today</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Quiz Embed */}
            <div className="mt-6">
              <iframe
                src="https://api.leadconnectorhq.com/widget/quiz/m8tFoM9mzFshqWkDMo8Q"
                style={{ border: 'none', width: '100%', minHeight: '500px' }}
                scrolling="no"
                id="m8tFoM9mzFshqWkDMo8Q"
                title="quiz"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
