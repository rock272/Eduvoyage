'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SalaryComparison } from './salary-comparison';
import { Trophy, Download, RefreshCw, TrendingUp, Heart, DollarSign } from 'lucide-react';

interface QuizAnswer {
  questionId: number;
  selectedOption: string;
  value: string;
}

interface QuizResultsProps {
  answers: QuizAnswer[];
  onRestart: () => void;
}

export function QuizResults({ answers, onRestart }: QuizResultsProps) {
  const [showSalaryComparison, setShowSalaryComparison] = useState(false);

  // AI logic to determine hybrid career based on answers
  const generateCareerRecommendation = () => {
    const passions = answers.filter(a => a.questionId === 1);
    const environment = answers.filter(a => a.questionId === 2);
    const skills = answers.filter(a => a.questionId === 3);
    const impact = answers.filter(a => a.questionId === 4);
    
    // Simplified logic - in real implementation, this would be more sophisticated
    const primaryDomain = passions[0]?.selectedOption || 'technology';
    const secondaryDomain = skills[0]?.selectedOption || 'design';
    
    const careerMap = {
      'gaming-programming': {
        title: 'Medical VR Developer',
        primary: 'Healthcare',
        secondary: 'Gaming',
        description: 'Create immersive medical training simulations and patient therapy applications using VR technology',
        averageSalary: '₹15-25 LPA',
        traditionalEquivalent: 'Software Developer',
        traditionalSalary: '₹8-15 LPA',
        growthRate: '+34%',
        parentApproval: '92%',
        skills: ['Unity 3D', 'Medical Knowledge', 'VR Development', 'Patient Care'],
        image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
      },
      'education-design': {
        title: 'Educational Game Designer',
        primary: 'Education',
        secondary: 'Gaming',
        description: 'Design engaging educational games that make learning fun and effective for students of all ages',
        averageSalary: '₹12-20 LPA',
        traditionalEquivalent: 'Teacher',
        traditionalSalary: '₹4-8 LPA',
        growthRate: '+28%',
        parentApproval: '87%',
        skills: ['Game Design', 'Educational Psychology', 'UI/UX', 'Curriculum Development'],
        image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1'
      }
    };

    // Default career recommendation
    return careerMap['gaming-programming'];
  };

  const careerRecommendation = generateCareerRecommendation();

  const handleDownloadReport = () => {
    // In a real implementation, this would generate and download a PDF
    alert('PDF report download would be implemented here');
  };

  if (showSalaryComparison) {
    return (
      <SalaryComparison
        hybridCareer={careerRecommendation}
        onBack={() => setShowSalaryComparison(false)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Results Header */}
      <Card className="rounded-xl shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
              <Trophy className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl text-gray-900">
            Your Perfect Hybrid Career Match
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Based on your responses, we've found your ideal career combination
          </p>
        </CardHeader>
      </Card>

      {/* Career Recommendation */}
      <Card className="rounded-xl shadow-lg">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                src={careerRecommendation.image}
                alt={careerRecommendation.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {careerRecommendation.title}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <Badge className="bg-red-100 text-red-800">
                    {careerRecommendation.primary}
                  </Badge>
                  <span className="text-gray-400">+</span>
                  <Badge className="bg-purple-100 text-purple-800">
                    {careerRecommendation.secondary}
                  </Badge>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {careerRecommendation.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <DollarSign className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">
                    {careerRecommendation.averageSalary}
                  </div>
                  <div className="text-sm text-gray-600">Average Salary</div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">
                    {careerRecommendation.growthRate}
                  </div>
                  <div className="text-sm text-gray-600">Job Growth</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="flex items-center text-gray-600">
                  <Heart className="h-4 w-4 mr-2" />
                  Parent Approval Rate
                </span>
                <span className="font-semibold text-blue-600">
                  {careerRecommendation.parentApproval}
                </span>
              </div>
            </div>
          </div>

          {/* Skills Required */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Key Skills You'll Develop
            </h3>
            <div className="flex flex-wrap gap-2">
              {careerRecommendation.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button
          onClick={() => setShowSalaryComparison(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <TrendingUp className="h-4 w-4 mr-2" />
          Compare Salaries
        </Button>
        
        <Button onClick={handleDownloadReport} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
        
        <Button onClick={onRestart} variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Retake Quiz
        </Button>
      </div>
    </div>
  );
}