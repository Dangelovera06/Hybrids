import React from 'react';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function QuizStep({ stepData, onAnswer }) {
  const { question, options, key } = stepData;

  return (
    <div>
      <CardHeader>
        <CardTitle className="text-2xl text-center">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-between h-14 text-lg hover:bg-blue-50 hover:border-blue-400"
              onClick={() => onAnswer(key, option)}
            >
              {option}
              <ArrowRight className="w-5 h-5" />
            </Button>
          ))}
        </div>
      </CardContent>
    </div>
  );
}