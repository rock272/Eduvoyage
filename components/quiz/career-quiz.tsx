'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { QuizQuestion } from './quiz-question';
import { QuizResults } from './quiz-results';
import { Brain, ArrowLeft, ArrowRight } from 'lucide-react';

interface QuizAnswer {
  questionId: number;
  selectedOption: string;
  value: string;
}

export function CareerQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      category: 'Passion',
      question: 'What excites you the most?',
      options: [
        {
          id: 'gaming',
          label: 'Gaming & Interactive Media',
          emoji: '🎮',
          image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'healthcare',
          label: 'Healthcare & Medicine',
          emoji: '⚕️',
          image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'technology',
          label: 'Technology & Innovation',
          emoji: '💻',
          image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'education',
          label: 'Education & Teaching',
          emoji: '📚',
          image: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        }
      ]
    },
    {
      id: 2,
      category: 'Work Environment',
      question: 'Where do you see yourself working?',
      options: [
        {
          id: 'creative-studio',
          label: 'Creative Studio',
          emoji: '🎨',
          image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'hospital',
          label: 'Hospital/Medical Center',
          emoji: '🏥',
          image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'tech-office',
          label: 'Tech Office',
          emoji: '🏢',
          image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'remote',
          label: 'Remote/Flexible',
          emoji: '🏠',
          image: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        }
      ]
    },
    {
      id: 3,
      category: 'Skills',
      question: 'Which skill do you want to develop most?',
      options: [
        {
          id: 'programming',
          label: 'Programming & Development',
          emoji: '⌨️',
          image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'design',
          label: 'Design & Creativity',
          emoji: '🎨',
          image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'research',
          label: 'Research & Analysis',
          emoji: '🔬',
          image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'communication',
          label: 'Communication & Teaching',
          emoji: '🗣️',
          image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        }
      ]
    },
    {
      id: 4,
      category: 'Impact',
      question: 'How do you want to make an impact?',
      options: [
        {
          id: 'entertainment',
          label: 'Entertainment & Fun',
          emoji: '🎭',
          image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'health-improvement',
          label: 'Health & Wellness',
          emoji: '❤️',
          image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'innovation',
          label: 'Technology Innovation',
          emoji: '🚀',
          image: 'https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'education-impact',
          label: 'Learning & Growth',
          emoji: '🌱',
          image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        }
      ]
    },
    {
      id: 5,
      category: 'Problem Solving',
      question: 'What type of problems do you enjoy solving?',
      options: [
        {
          id: 'creative-challenges',
          label: 'Creative & Artistic Challenges',
          emoji: '🎨',
          image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'medical-problems',
          label: 'Medical & Health Issues',
          emoji: '🩺',
          image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'technical-problems',
          label: 'Technical & Engineering',
          emoji: '⚙️',
          image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        },
        {
          id: 'social-problems',
          label: 'Social & Educational',
          emoji: '🤝',
          image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
        }
      ]
    }
  ];

  const handleAnswerSelect = (questionId: number, selectedOption: string, value: string) => {
    const newAnswer: QuizAnswer = { questionId, selectedOption, value };
    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== questionId);
      return [...filtered, newAnswer];
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers.find(a => a.questionId === questions[currentQuestion].id);

  if (showResults) {
    return <QuizResults answers={answers} onRestart={() => {
      setCurrentQuestion(0);
      setAnswers([]);
      setShowResults(false);
    }} />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Header */}
      <Card className="rounded-xl shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-xl font-semibold">
              <Brain className="h-6 w-6 mr-2 text-blue-600" />
              AI Career Discovery Quiz
            </CardTitle>
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-gray-600">
              {Math.round(progress)}% Complete
            </p>
          </div>
        </CardHeader>
      </Card>

      {/* Question */}
      <QuizQuestion
        question={questions[currentQuestion]}
        selectedAnswer={currentAnswer?.selectedOption}
        onAnswerSelect={(option, value) => 
          handleAnswerSelect(questions[currentQuestion].id, option, value)
        }
      />

      {/* Navigation */}
      <Card className="rounded-xl shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <span className="text-sm text-gray-600">
              {questions[currentQuestion].category}
            </span>

            <Button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}