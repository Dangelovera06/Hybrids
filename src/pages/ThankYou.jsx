import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThankYouPage() {
  const firedRef = useRef(false);

  useEffect(() => {
    if (firedRef.current) return;
    firedRef.current = true;

    const params = new URLSearchParams(window.location.search);
    const eventID =
      params.get('event_id') ||
      (window.crypto?.randomUUID ? window.crypto.randomUUID() : `lead_${Date.now()}`);

    const payload = {
      content_name: 'AOX Implant Dentures Quiz',
      content_category: 'Dental Lead',
      currency: 'USD',
      value: 100,
    };

    if (window.fbq) {
      window.fbq('track', 'Lead', payload, { eventID });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          You're All Set!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Thanks for submitting your info. Our team will reach out shortly to confirm
          your FREE consultation at St. Lucie Center for Cosmetic Dentistry.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Want to talk now? Call{' '}
          <a href="tel:+17722665844" className="font-semibold text-blue-600">
            (772) 266-5844
          </a>
        </p>
        <Link to="/">
          <Button size="lg" className="w-full md:w-auto">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
