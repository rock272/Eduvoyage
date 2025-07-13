'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/language-context';
import { TrendingUp, Target, BookOpen } from 'lucide-react';

export function CareerConfidenceWidget() {
  const { t } = useLanguage();
  const confidenceScore = 78;

  return (
    <Card className="rounded-xl shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-lg font-semibold">
          <Target className="h-5 w-5 mr-2 text-blue-600" />
          {t('careerConfidenceScore')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Main Score */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgb(229, 231, 235)"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgb(37, 99, 235)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${confidenceScore * 2.51} 251`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-600">{confidenceScore}%</span>
              </div>
            </div>
            <p className="text-gray-600">Career Readiness Level</p>
          </div>

          {/* Breakdown */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center text-sm">
                <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                Skills Assessment
              </span>
              <div className="flex items-center space-x-2">
                <Progress value={85} className="w-20" />
                <span className="text-sm font-medium">85%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="flex items-center text-sm">
                <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                Career Knowledge
              </span>
              <div className="flex items-center space-x-2">
                <Progress value={72} className="w-20" />
                <span className="text-sm font-medium">72%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="flex items-center text-sm">
                <Target className="h-4 w-4 mr-2 text-purple-500" />
                Goal Clarity
              </span>
              <div className="flex items-center space-x-2">
                <Progress value={76} className="w-20" />
                <span className="text-sm font-medium">76%</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Next Steps to Improve</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• Complete 2 more skill assessments</li>
              <li>• Attend upcoming AI & Healthcare webinar</li>
              <li>• Explore 3 hybrid career paths</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}