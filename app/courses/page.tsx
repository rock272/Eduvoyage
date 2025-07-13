'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/language-context';
import { Search, Filter, BookOpen, Clock, Star, DollarSign, Award, Play } from 'lucide-react';

export default function CoursesPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Machine Learning for Engineers',
      platform: 'Coursera',
      instructor: 'Dr. Andrew Ng',
      duration: '11 weeks',
      price: 'Free',
      rating: 4.9,
      students: 125000,
      level: 'Intermediate',
      category: 'AI/ML',
      skills: ['Python', 'TensorFlow', 'Neural Networks'],
      description: 'Learn the fundamentals of machine learning and apply them to real-world engineering problems.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      certificate: true,
      aiRecommended: true
    },
    {
      id: 2,
      title: 'Embedded Systems Programming',
      platform: 'edX',
      instructor: 'MIT Faculty',
      duration: '8 weeks',
      price: '$99',
      rating: 4.7,
      students: 45000,
      level: 'Advanced',
      category: 'Embedded Systems',
      skills: ['C Programming', 'Microcontrollers', 'RTOS'],
      description: 'Master embedded systems programming with hands-on projects using ARM Cortex-M processors.',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      certificate: true,
      aiRecommended: false
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      platform: 'Udemy',
      instructor: 'Colt Steele',
      duration: '63 hours',
      price: '$49',
      rating: 4.8,
      students: 89000,
      level: 'Beginner',
      category: 'Web Development',
      skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      description: 'Complete web development bootcamp covering frontend and backend technologies.',
      image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      certificate: true,
      aiRecommended: true
    },
    {
      id: 4,
      title: 'Data Science with Python',
      platform: 'DataCamp',
      instructor: 'DataCamp Team',
      duration: '4 months',
      price: '$29/month',
      rating: 4.6,
      students: 67000,
      level: 'Intermediate',
      category: 'Data Science',
      skills: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      description: 'Comprehensive data science track with hands-on projects and real datasets.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      certificate: true,
      aiRecommended: false
    },
    {
      id: 5,
      title: 'Robotics Fundamentals',
      platform: 'Coursera',
      instructor: 'University of Pennsylvania',
      duration: '6 weeks',
      price: 'Free',
      rating: 4.5,
      students: 34000,
      level: 'Beginner',
      category: 'Robotics',
      skills: ['ROS', 'Control Systems', 'Computer Vision'],
      description: 'Introduction to robotics covering kinematics, dynamics, and control systems.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      certificate: true,
      aiRecommended: true
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials',
      platform: 'Cisco Networking Academy',
      instructor: 'Cisco Experts',
      duration: '30 hours',
      price: 'Free',
      rating: 4.4,
      students: 156000,
      level: 'Beginner',
      category: 'Cybersecurity',
      skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment'],
      description: 'Learn cybersecurity fundamentals and protect digital assets from threats.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1',
      certificate: true,
      aiRecommended: false
    }
  ];

  const categories = [
    'AI/ML',
    'Web Development',
    'Data Science',
    'Embedded Systems',
    'Robotics',
    'Cybersecurity',
    'Mobile Development',
    'Cloud Computing'
  ];

  const platforms = [
    'Coursera',
    'edX',
    'Udemy',
    'DataCamp',
    'Cisco Networking Academy',
    'Khan Academy',
    'FreeCodeCamp'
  ];

  const getLevelColor = (level: string) => {
    const colors = {
      Beginner: 'bg-green-100 text-green-800',
      Intermediate: 'bg-yellow-100 text-yellow-800',
      Advanced: 'bg-red-100 text-red-800'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getPriceColor = (price: string) => {
    if (price === 'Free') return 'bg-green-100 text-green-800';
    return 'bg-blue-100 text-blue-800';
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesPlatform = selectedPlatform === 'all' || course.platform === selectedPlatform;
    const matchesPrice = selectedPrice === 'all' || 
                        (selectedPrice === 'free' && course.price === 'Free') ||
                        (selectedPrice === 'paid' && course.price !== 'Free');
    
    return matchesSearch && matchesCategory && matchesPlatform && matchesPrice;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Smart Course Recommendations</h1>
          <p className="text-gray-600 mt-2">AI-curated courses tailored to your interests and career goals</p>
        </div>

        {/* Search and Filters */}
        <Card className="rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="h-5 w-5 mr-2 text-blue-600" />
              Find Your Perfect Course
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search courses, skills, topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                <SelectTrigger>
                  <SelectValue placeholder="Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Platforms</SelectItem>
                  {platforms.map((platform) => (
                    <SelectItem key={platform} value={platform}>
                      {platform}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                <SelectTrigger>
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations Banner */}
        <Card className="rounded-xl shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  🤖 AI Recommendations for You
                </h3>
                <p className="text-blue-700">
                  Based on your profile (CSE, 3rd Year) and interests in AI & Robotics
                </p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                View All AI Picks
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Found {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
          </p>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`text-xs ${getPriceColor(course.price)}`}>
                    {course.price}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={`text-xs ${getLevelColor(course.level)}`}>
                    {course.level}
                  </Badge>
                </div>
                {course.aiRecommended && (
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-purple-100 text-purple-800 text-xs">
                      🤖 AI Pick
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{course.instructor} • {course.platform}</p>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>

                <div className="flex flex-wrap gap-1">
                  {course.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {course.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{course.skills.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      Duration
                    </span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600">
                      <Star className="h-4 w-4 mr-1" />
                      Rating
                    </span>
                    <span className="font-medium">⭐ {course.rating}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-gray-600">
                      <BookOpen className="h-4 w-4 mr-1" />
                      Students
                    </span>
                    <span className="font-medium">{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  {course.certificate && (
                    <div className="flex items-center text-xs text-green-600">
                      <Award className="h-3 w-3 mr-1" />
                      Certificate
                    </div>
                  )}
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Play className="h-4 w-4 mr-2" />
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <Card className="rounded-xl shadow-lg">
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find more courses.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}