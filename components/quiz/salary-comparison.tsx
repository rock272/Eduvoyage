'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, TrendingUp, DollarSign } from 'lucide-react';

interface CareerData {
  title: string;
  primary: string;
  secondary: string;
  averageSalary: string;
  traditionalEquivalent: string;
  traditionalSalary: string;
  growthRate: string;
  parentApproval: string;
}

interface SalaryComparisonProps {
  hybridCareer: CareerData;
  onBack: () => void;
}

export function SalaryComparison({ hybridCareer, onBack }: SalaryComparisonProps) {
  const hybridSalaryMin = 15;
  const hybridSalaryMax = 25;
  const traditionalSalaryMin = 8;
  const traditionalSalaryMax = 15;

  const hybridAverage = (hybridSalaryMin + hybridSalaryMax) / 2;
  const traditionalAverage = (traditionalSalaryMin + traditionalSalaryMax) / 2;
  const salaryIncrease = ((hybridAverage - traditionalAverage) / traditionalAverage * 100).toFixed(0);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card className="rounded-xl shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <CardTitle className="text-xl">
              Salary Comparison: Hybrid vs Traditional Careers
            </CardTitle>
          </div>
        </CardHeader>
      </Card>

      {/* Comparison Chart */}
      <Card className="rounded-xl shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="h-5 w-5 mr-2 text-green-600" />
            Salary Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Hybrid Career */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {hybridCareer.title} (Hybrid)
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-red-100 text-red-800 text-xs">
                      {hybridCareer.primary}
                    </Badge>
                    <span className="text-gray-400">+</span>
                    <Badge className="bg-purple-100 text-purple-800 text-xs">
                      {hybridCareer.secondary}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    ₹{hybridSalaryMin}-{hybridSalaryMax} LPA
                  </div>
                  <div className="text-sm text-gray-600">Average: ₹{hybridAverage} LPA</div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-6 rounded-full flex items-center justify-end pr-2"
                    style={{ width: '75%' }}
                  >
                    <span className="text-white text-xs font-medium">₹{hybridAverage}L</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Traditional Career */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {hybridCareer.traditionalEquivalent} (Traditional)
                  </h3>
                  <div className="mt-1">
                    <Badge variant="secondary" className="text-xs">
                      Single Domain
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-600">
                    ₹{traditionalSalaryMin}-{traditionalSalaryMax} LPA
                  </div>
                  <div className="text-sm text-gray-600">Average: ₹{traditionalAverage} LPA</div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div 
                    className="bg-gradient-to-r from-gray-400 to-gray-600 h-6 rounded-full flex items-center justify-end pr-2"
                    style={{ width: '45%' }}
                  >
                    <span className="text-white text-xs font-medium">₹{traditionalAverage}L</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Summary */}
            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  +{salaryIncrease}%
                </div>
                <div className="text-lg text-gray-900 mb-2">
                  Higher earning potential with hybrid skills
                </div>
                <div className="text-gray-600">
                  Hybrid careers offer ₹{(hybridAverage - traditionalAverage).toFixed(1)}L more per year on average
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Career Growth Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Job Market Growth</span>
                <span className="font-semibold text-green-600">{hybridCareer.growthRate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Skills Diversity</span>
                <span className="font-semibold text-blue-600">High</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Innovation Potential</span>
                <span className="font-semibold text-purple-600">Very High</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Job Security</span>
                <span className="font-semibold text-green-600">Enhanced</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Parent Approval Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Overall Approval</span>
                <span className="font-semibold text-blue-600">{hybridCareer.parentApproval}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Salary Satisfaction</span>
                <span className="font-semibold text-green-600">89%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Future Stability</span>
                <span className="font-semibold text-blue-600">94%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Social Status</span>
                <span className="font-semibold text-purple-600">88%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}