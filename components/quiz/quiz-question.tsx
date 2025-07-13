'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface QuestionOption {
  id: string;
  label: string;
  emoji: string;
  image: string;
}

interface Question {
  id: number;
  category: string;
  question: string;
  options: QuestionOption[];
}

interface QuizQuestionProps {
  question: Question;
  selectedAnswer?: string;
  onAnswerSelect: (optionId: string, value: string) => void;
}

export function QuizQuestion({ question, selectedAnswer, onAnswerSelect }: QuizQuestionProps) {
  return (
    <Card className="rounded-xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-center text-gray-900">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => onAnswerSelect(option.id, option.label)}
              className={cn(
                'relative overflow-hidden rounded-lg border-2 transition-all duration-200 hover:shadow-lg',
                selectedAnswer === option.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              )}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={option.image}
                  alt={option.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <span className="text-4xl">{option.emoji}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium text-gray-900 text-center">
                  {option.label}
                </h3>
              </div>

              {selectedAnswer === option.id && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}