import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function QuizPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center p-4 pt-8">
      <div className="w-full max-w-2xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center space-x-2 ml-2">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb22ce16a6085c07946090/2ab4892a3_favicon.png"
              alt="Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-lg text-gray-900">AOX Implant Dentures Quiz</span>
          </div>
        </div>

        <iframe
          src="https://api.leadconnectorhq.com/widget/quiz/m8tFoM9mzFshqWkDMo8Q"
          style={{ border: 'none', width: '100%', minHeight: '600px' }}
          scrolling="no"
          id="m8tFoM9mzFshqWkDMo8Q"
          title="quiz"
        />
      </div>
    </div>
  );
}
