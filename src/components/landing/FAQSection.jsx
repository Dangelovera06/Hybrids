import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronDown,
  ChevronRight, 
  HelpCircle,
  CreditCard,
  Shield,
  Clock
} from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      icon: HelpCircle,
      question: "What if I've been told I'm not a candidate?",
      answer: "We hear this all the time — and most patients still qualify. Advances in dental implant technology mean that even patients with bone loss, diabetes, or other conditions can often receive implants. We use advanced 3D imaging and bone grafting techniques when needed. During your free consultation, we'll give you an honest assessment of your options.",
      color: "text-blue-600"
    },
    {
      icon: CreditCard,
      question: "Will insurance help?",
      answer: "Some insurance plans do provide coverage for implant procedures, especially when they're medically necessary. We'll guide you through every step of the insurance process and help maximize your benefits. We also offer flexible financing options with low monthly payments, so you don't have to wait to get the smile you deserve.",
      color: "text-green-600"
    },
    {
      icon: Shield,
      question: "Is it painful?",
      answer: "We offer sedation. Most patients say they felt nothing during the procedure and are surprised by how comfortable they were. We use the latest pain management techniques, and many patients return to work the next day. Your comfort is our priority throughout the entire process.",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      question: "How long does it take?",
      answer: "In many cases, you'll walk out with a new smile in just one day! Our All-on-4 procedure allows us to place implants and attach your new teeth in a single appointment. For some patients, the process may take 3-6 months depending on healing and specific needs. We'll give you a personalized timeline during your consultation.",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions? We Have{" "}
            <span className="text-blue-600">Answers</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Here are the most common concerns our patients have. 
            Still have questions? Ask during your free consultation.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-all duration-300">
              <CardContent className="p-0">
                <button
                  className="w-full p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-gray-100`}>
                        <faq.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${faq.color}`} />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-2">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      ) : (
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                    <div className="pl-8 sm:pl-16">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Still Have Questions?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Every patient is unique, and we're here to address your specific concerns. 
              During your free consultation, you'll have plenty of time to ask questions and get personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-sm sm:text-base">60-minute consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-sm sm:text-base">No pressure, no sales pitch</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <HelpCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-sm sm:text-base">All questions welcome</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}