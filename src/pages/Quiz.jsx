
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, CheckCircle, Smile, Sparkles } from 'lucide-react';
import ProgressBar from '../components/quiz/ProgressBar';
import QuizStep from '../components/quiz/QuizStep';
import { submitLeadToGHL, trackGHLEvent } from '@/utils/ghl';

const quizQuestions = [
{
  question: "What is your primary dental concern?",
  options: ["Missing one or more teeth", "Loose or uncomfortable dentures", "Unhappy with the look of my smile", "Other"],
  key: "concern"
},
{
  question: "Have you been told you're not a candidate for implants before?",
  options: ["Yes", "No", "I'm not sure"],
  key: "notCandidate"
},
{
  question: "How soon are you looking to start treatment?",
  options: ["As soon as possible", "Within the next 3 months", "6+ months from now", "Just researching"],
  key: "timeline"
}];


export default function QuizPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = quizQuestions.length + 1; // +1 for the contact info form

  const handleAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      navigate(-1); // Go back to the landing page
    }
  };

  const handleUserInfoChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Submit directly to GoHighLevel (UNLIMITED submissions!)
      await submitLeadToGHL({
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
        source: 'Dental Quiz',
        leadSource: 'Website Quiz',
        tags: ['quiz-lead', 'dental-implants', 'free-consultation'],
        customFields: {
          concern: answers.concern || '',
          notCandidate: answers.notCandidate || '',
          timeline: answers.timeline || '',
          quizCompletedAt: new Date().toISOString()
        }
      });
      
      // Track successful quiz submission with Meta Pixel
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Dental Quiz Submission',
          content_category: 'Quiz',
          value: 495, // Value of free consultation
          currency: 'USD',
          lead_type: 'quiz_completion'
        });
        console.log('🎯 Lead event fired for quiz submission');
        
        // Also track as a custom event
        window.fbq('trackCustom', 'QuizCompleted', {
          quiz_type: 'dental_consultation',
          concern: answers.concern || '',
          timeline: answers.timeline || '',
          candidate_status: answers.notCandidate || ''
        });
        console.log('📋 QuizCompleted custom event fired');
      } else {
        console.log('❌ fbq not available for quiz tracking');
      }

      // Track with GHL External Tracking (for analytics)
      trackGHLEvent('Lead', {
        name: userInfo.name,
        email: userInfo.email,
        phone: userInfo.phone,
        concern: answers.concern || '',
        notCandidate: answers.notCandidate || '',
        timeline: answers.timeline || '',
        source: 'dental_quiz',
        value: 495
      });
      
      // Show success to user regardless (they don't need to know about backend issues)
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success to user, but log error
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" onClick={handleBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cb22ce16a6085c07946090/2ab4892a3_favicon.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg text-gray-900">AOX Implant Dentures Quiz
            </span>
          </div>
          <div className="w-10"></div> {/* Spacer */}
        </div>

        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <Card className="shadow-2xl">
          {!isSubmitted ?
          <>
              {currentStep < quizQuestions.length &&
            <QuizStep
              stepData={quizQuestions[currentStep]}
              onAnswer={handleAnswer} />

            }

              {currentStep === quizQuestions.length &&
            <div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">You're almost there!</CardTitle>
                    <p className="text-center text-gray-600">Enter your details to see your results and claim your Free Consultation.</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          name="name"
                          placeholder="John Doe" 
                          required 
                          onChange={handleUserInfoChange} 
                          value={userInfo.name} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          placeholder="john@example.com" 
                          required 
                          onChange={handleUserInfoChange} 
                          value={userInfo.email} 
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          type="tel" 
                          placeholder="(772) 123-4567" 
                          required 
                          onChange={handleUserInfoChange} 
                          value={userInfo.phone} 
                        />
                      </div>
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                        <Sparkles className="w-5 h-5 mr-2" />
                        Get My Results & Free Consult
                      </Button>
                    </form>
                  </CardContent>
                </div>
            }
            </> :

          <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-6">Our team will contact you shortly to schedule your FREE consultation and 3D scan ($395 value).</p>
              <Button onClick={() => navigate('/')}>Return to Homepage</Button>
            </CardContent>
          }
        </Card>
      </div>
    </div>);

}
