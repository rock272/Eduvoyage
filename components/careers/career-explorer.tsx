'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, TrendingUp, DollarSign, Heart } from 'lucide-react';

export function CareerExplorer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedSalaryRange, setSelectedSalaryRange] = useState('all');

  const careers = [
    {
      id: 1,
      title: 'Medical VR Developer',
      primaryDomain: 'Healthcare',
      secondaryDomain: 'Gaming',
      description: 'Create immersive medical training simulations and patient therapy applications',
      averageSalary: '₹15-25 LPA',
      growthRate: '+34%',
      parentApproval: '92%',
      demandLevel: 'High',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      skills: ['Unity 3D', 'Medical Knowledge', 'VR Development'],
    },
    {
      id: 2,
      title: 'Educational Game Designer',
      primaryDomain: 'Education',
      secondaryDomain: 'Gaming',
      description: 'Design engaging educational games that make learning fun and effective',
      averageSalary: '₹12-20 LPA',
      growthRate: '+28%',
      parentApproval: '87%',
      demandLevel: 'High',
      image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      skills: ['Game Design', 'Educational Psychology', 'UI/UX'],
    },
    {
      id: 3,
      title: 'AI Ethics Researcher',
      primaryDomain: 'Technology',
      secondaryDomain: 'Philosophy',
      description: 'Ensure AI development follows ethical guidelines and social responsibility',
      averageSalary: '₹18-30 LPA',
      growthRate: '+45%',
      parentApproval: '95%',
      demandLevel: 'Very High',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      skills: ['AI/ML', 'Ethics', 'Research Methods'],
    },
    {
      id: 4,
      title: 'Digital Health Analyst',
      primaryDomain: 'Healthcare',
      secondaryDomain: 'Data Science',
      description: 'Analyze health data to improve patient outcomes and healthcare delivery',
      averageSalary: '₹14-22 LPA',
      growthRate: '+38%',
      parentApproval: '90%',
      demandLevel: 'High',
      image: 'https://images.pexels.com/photos/6823564/pexels-photo-6823564.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      skills: ['Data Analysis', 'Healthcare Domain', 'Python'],
    },
    {
      id: 5,
      title: 'Sustainable Tech Engineer',
      primaryDomain: 'Technology',
      secondaryDomain: 'Environment',
      description: 'Develop technology solutions for environmental challenges and sustainability',
      averageSalary: '₹16-26 LPA',
      growthRate: '+42%',
      parentApproval: '88%',
      demandLevel: 'Very High',
      image: 'https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      skills: ['Engineering', 'Environmental Science', 'Clean Tech'],
    },
    {
      id: 6,
      title: 'Creative Therapy Specialist',
      primaryDomain: 'Healthcare',
      secondaryDomain: 'Arts',
      description: 'Use creative arts to help patients with mental health and recovery',
      averageSalary: '₹10-18 LPA',
      growthRate: '+25%',
      parentApproval: '85%',
      demandLevel: 'Medium',
      image: 'https://images.pexels.com/photos/6195111/pexels-photo-6195111.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      skills: ['Psychology', 'Creative Arts', 'Patient Care'],
    },
  ];

  const getDomainColor = (domain: string) => {
    const colors = {
      Healthcare: 'bg-red-100 text-red-800',
      Gaming: 'bg-purple-100 text-purple-800',
      Education: 'bg-blue-100 text-blue-800',
      Technology: 'bg-green-100 text-green-800',
      Philosophy: 'bg-yellow-100 text-yellow-800',
      'Data Science': 'bg-indigo-100 text-indigo-800',
      Environment: 'bg-emerald-100 text-emerald-800',
      Arts: 'bg-pink-100 text-pink-800',
    };
    return colors[domain as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getDemandColor = (demand: string) => {
    const colors = {
      'Very High': 'bg-green-100 text-green-800',
      'High': 'bg-blue-100 text-blue-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Low': 'bg-gray-100 text-gray-800',
    };
    return colors[demand as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.primaryDomain.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         career.secondaryDomain.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDomain = selectedDomain === 'all' || 
                         career.primaryDomain === selectedDomain || 
                         career.secondaryDomain === selectedDomain;
    
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="rounded-xl shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Search className="h-5 w-5 mr-2 text-blue-600" />
            Explore Hybrid Careers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search careers, skills, domains..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by domain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Domains</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Education">Education</SelectItem>
                <SelectItem value="Gaming">Gaming</SelectItem>
                <SelectItem value="Environment">Environment</SelectItem>
                <SelectItem value="Arts">Arts</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedSalaryRange} onValueChange={setSelectedSalaryRange}>
              <SelectTrigger>
                <SelectValue placeholder="Salary range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ranges</SelectItem>
                <SelectItem value="high">₹20+ LPA</SelectItem>
                <SelectItem value="medium">₹10-20 LPA</SelectItem>
                <SelectItem value="entry">Below ₹10 LPA</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Found {filteredCareers.length} hybrid career{filteredCareers.length !== 1 ? 's' : ''}
        </p>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Career Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCareers.map((career) => (
          <Card key={career.id} className="rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative">
              <img
                src={career.image}
                alt={career.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="absolute top-4 right-4">
                <Badge className={`text-xs ${getDemandColor(career.demandLevel)}`}>
                  {career.demandLevel} Demand
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{career.title}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{career.description}</p>
              </div>

              <div className="flex flex-wrap gap-1">
                <Badge className={`text-xs ${getDomainColor(career.primaryDomain)}`}>
                  {career.primaryDomain}
                </Badge>
                <span className="text-gray-400 text-xs">+</span>
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

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-900">Key Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {career.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Explore Career Path
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCareers.length === 0 && (
        <Card className="rounded-xl shadow-lg">
          <CardContent className="p-12 text-center">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No careers found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters to find more career options.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}