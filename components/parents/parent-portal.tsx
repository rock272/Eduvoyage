'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Heart, 
  Shield, 
  Award,
  BookOpen,
  Target
} from 'lucide-react';

export function ParentPortal() {
  const [doctorSalary, setDoctorSalary] = useState([25]);
  const [illustratorSalary, setIllustratorSalary] = useState([18]);

  const childProgress = {
    careerConfidence: 78,
    skillsAssessment: 85,
    coursesCompleted: 12,
    certificationsEarned: 3,
    webinarsAttended: 8,
  };

  const approvalMetrics = [
    {
      title: 'Parental Trust Score',
      score: 92,
      description: 'Based on career guidance accuracy',
      icon: Shield,
      color: 'text-green-600',
    },
    {
      title: 'Career Stability Rating',
      score: 88,
      description: 'Future job security assessment',
      icon: Target,
      color: 'text-blue-600',
    },
    {
      title: 'Earning Potential',
      score: 94,
      description: 'Salary growth prospects',
      icon: TrendingUp,
      color: 'text-purple-600',
    },
    {
      title: 'Social Status Index',
      score: 86,
      description: 'Professional recognition level',
      icon: Award,
      color: 'text-yellow-600',
    },
  ];

  const recentActivity = [
    {
      activity: 'Completed AI Career Quiz',
      score: '85%',
      time: '2 hours ago',
      category: 'Assessment',
    },
    {
      activity: 'Started VR Development Course',
      progress: '15%',
      time: '1 day ago',
      category: 'Learning',
    },
    {
      activity: 'Attended Healthcare Tech Webinar',
      duration: '1.5 hours',
      time: '3 days ago',
      category: 'Webinar',
    },
    {
      activity: 'Earned Digital Health Badge',
      level: 'Intermediate',
      time: '1 week ago',
      category: 'Achievement',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="rounded-xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Career Confidence</p>
                <p className="text-2xl font-bold text-blue-600">{childProgress.careerConfidence}%</p>
              </div>
              <Target className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Courses Completed</p>
                <p className="text-2xl font-bold text-green-600">{childProgress.coursesCompleted}</p>
              </div>
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Certifications</p>
                <p className="text-2xl font-bold text-purple-600">{childProgress.certificationsEarned}</p>
              </div>
              <Award className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Webinars Attended</p>
                <p className="text-2xl font-bold text-yellow-600">{childProgress.webinarsAttended}</p>
              </div>
              <Users className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Earnings Calculator */}
        <Card className="rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-green-600" />
              Earnings Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium">Doctor Salary</label>
                <span className="text-lg font-bold text-blue-600">₹{doctorSalary[0]} LPA</span>
              </div>
              <Slider
                value={doctorSalary}
                onValueChange={setDoctorSalary}
                max={50}
                min={10}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium">Medical Illustrator</label>
                <span className="text-lg font-bold text-purple-600">₹{illustratorSalary[0]} LPA</span>
              </div>
              <Slider
                value={illustratorSalary}
                onValueChange={setIllustratorSalary}
                max={30}
                min={8}
                step={1}
                className="w-full"
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Comparison Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Traditional Doctor:</span>
                  <span className="font-medium">₹{doctorSalary[0]}L/year</span>
                </div>
                <div className="flex justify-between">
                  <span>Medical Illustrator:</span>
                  <span className="font-medium">₹{illustratorSalary[0]}L/year</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span>Difference:</span>
                  <span className={`font-medium ${
                    doctorSalary[0] > illustratorSalary[0] ? 'text-blue-600' : 'text-purple-600'
                  }`}>
                    {doctorSalary[0] > illustratorSalary[0] ? '+' : ''}
                    ₹{Math.abs(doctorSalary[0] - illustratorSalary[0])}L
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Child's Progress */}
        <Card className="rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
              Child's Career Development
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Skills Assessment</span>
                <span className="text-sm text-gray-600">{childProgress.skillsAssessment}%</span>
              </div>
              <Progress value={childProgress.skillsAssessment} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Career Exploration</span>
                <span className="text-sm text-gray-600">72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Learning Progress</span>
                <span className="text-sm text-gray-600">68%</span>
              </div>
              <Progress value={68} className="h-2" />
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-3">Recent Activity</h4>
              <div className="space-y-3">
                {recentActivity.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-sm font-medium">{item.activity}</p>
                      <p className="text-xs text-gray-600">{item.time}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Approval Metrics */}
      <Card className="rounded-xl shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Heart className="h-5 w-5 mr-2 text-red-500" />
            Approval Metrics & Trust Indicators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approvalMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <metric.icon className={`h-8 w-8 ${metric.color}`} />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {metric.score}%
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {metric.title}
                </div>
                <div className="text-xs text-gray-600">
                  {metric.description}
                </div>
                <div className="mt-2">
                  <Progress value={metric.score} className="h-1" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-blue-900">
                Parent Confidence Report
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium text-blue-900 mb-1">Safety & Security</div>
                <div className="text-blue-700">
                  ✓ Verified career advisors<br/>
                  ✓ Safe learning environment<br/>
                  ✓ Progress monitoring
                </div>
              </div>
              <div>
                <div className="font-medium text-blue-900 mb-1">Career Guidance Quality</div>
                <div className="text-blue-700">
                  ✓ AI-powered recommendations<br/>
                  ✓ Industry-relevant skills<br/>
                  ✓ Real market data
                </div>
              </div>
              <div>
                <div className="font-medium text-blue-900 mb-1">Parent Involvement</div>
                <div className="text-blue-700">
                  ✓ Regular progress updates<br/>
                  ✓ Transparent reporting<br/>
                  ✓ Direct communication
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}