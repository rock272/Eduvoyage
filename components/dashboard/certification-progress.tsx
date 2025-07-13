'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { Award, Clock, BookOpen, CheckCircle } from 'lucide-react';

export function CertificationProgress() {
  const { t } = useLanguage();

  const certifications = [
    {
      id: 1,
      title: 'AI Fundamentals',
      provider: 'TechCorp Academy',
      progress: 75,
      totalModules: 8,
      completedModules: 6,
      estimatedTime: '2 weeks',
      difficulty: 'Beginner',
      category: 'Technology',
    },
    {
      id: 2,
      title: 'Game Design Principles',
      provider: 'Creative Institute',
      progress: 40,
      totalModules: 12,
      completedModules: 5,
      estimatedTime: '1 month',
      difficulty: 'Intermediate',
      category: 'Gaming',
    },
    {
      id: 3,
      title: 'Healthcare Analytics',
      provider: 'MedTech University',
      progress: 90,
      totalModules: 6,
      completedModules: 5,
      estimatedTime: '3 days',
      difficulty: 'Advanced',
      category: 'Healthcare',
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Beginner: 'bg-green-100 text-green-800',
      Intermediate: 'bg-yellow-100 text-yellow-800',
      Advanced: 'bg-red-100 text-red-800',
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="rounded-xl shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-lg font-semibold">
          <Award className="h-5 w-5 mr-2 text-blue-600" />
          {t('certificationProgress')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{cert.title}</h4>
                    <p className="text-sm text-gray-600">{cert.provider}</p>
                  </div>
                  <Badge className={`text-xs ${getDifficultyColor(cert.difficulty)}`}>
                    {cert.difficulty}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{cert.progress}%</span>
                  </div>
                  <Progress value={cert.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {cert.completedModules}/{cert.totalModules} modules
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {cert.estimatedTime} left
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Badge variant="secondary" className="text-xs">
                    {cert.category}
                  </Badge>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    {cert.progress === 100 ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        View Certificate
                      </>
                    ) : (
                      'Continue Learning'
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full">
            Browse All Certifications
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}