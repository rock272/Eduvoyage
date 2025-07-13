'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { Briefcase, TrendingUp, DollarSign, Heart } from 'lucide-react';

export function RecommendedCareers() {
  const { t } = useLanguage();

  const recommendedCareers = [
    {
      id: 1,
      title: 'Medical VR Developer',
      primaryDomain: 'Healthcare',
      secondaryDomain: 'Gaming',
      description: 'Create immersive medical training simulations and patient therapy applications',
      averageSalary: '₹15-25 LPA',
      growthRate: '+34%',
      matchScore: 94,
      parentApproval: '92%',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    },
    {
      id: 2,
      title: 'Educational Game Designer',
      primaryDomain: 'Education',
      secondaryDomain: 'Gaming',
      description: 'Design engaging educational games that make learning fun and effective',
      averageSalary: '₹12-20 LPA',
      growthRate: '+28%',
      matchScore: 89,
      parentApproval: '87%',
      image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    },
    {
      id: 3,
      title: 'AI Ethics Researcher',
      primaryDomain: 'Technology',
      secondaryDomain: 'Philosophy',
      description: 'Ensure AI development follows ethical guidelines and social responsibility',
      averageSalary: '₹18-30 LPA',
      growthRate: '+45%',
      matchScore: 87,
      parentApproval: '95%',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
    },
  ];

  const getDomainColor = (domain: string) => {
    const colors = {
      Healthcare: 'bg-red-100 text-red-800',
      Gaming: 'bg-purple-100 text-purple-800',
      Education: 'bg-blue-100 text-blue-800',
      Technology: 'bg-green-100 text-green-800',
      Philosophy: 'bg-yellow-100 text-yellow-800',
    };
    return colors[domain as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="rounded-xl shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-lg font-semibold">
          <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
          {t('recommendedCareers')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedCareers.map((career) => (
            <div
              key={career.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={career.image}
                alt={career.title}
                className="w-full h-32 object-cover"
              />
              
              <div className="p-4 space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">{career.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{career.description}</p>
                </div>

                <div className="flex flex-wrap gap-1">
                  <Badge className={`text-xs ${getDomainColor(career.primaryDomain)}`}>
                    {career.primaryDomain}
                  </Badge>
                  <span className="text-gray-400">+</span>
                  <Badge className={`text-xs ${getDomainColor(career.secondaryDomain)}`}>
                    {career.secondaryDomain}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Salary
                    </span>
                    <span className="font-medium">{career.averageSalary}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      Growth
                    </span>
                    <span className="font-medium text-green-600">{career.growthRate}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600">
                      <Heart className="h-4 w-4 mr-1" />
                      Parent Approval
                    </span>
                    <span className="font-medium text-blue-600">{career.parentApproval}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-gray-600">
                    {career.matchScore}% match
                  </span>
                  <Button size="sm" variant="outline">
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full mt-4">
          {t('viewAll')} Career Paths
        </Button>
      </CardContent>
    </Card>
  );
}