'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/language-context';
import { Search, Filter, Users, Star, Clock, DollarSign, Video, Calendar, Award } from 'lucide-react';

export default function MentorsPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');

  const mentors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      role: 'Senior AI Engineer at Google',
      company: 'Google',
      experience: '8 years',
      expertise: ['Machine Learning', 'Computer Vision', 'AI Hardware'],
      rating: 4.9,
      sessions: 150,
      price: '₹2,500/hour',
      priceValue: 2500,
      bio: 'Leading AI research at Google with focus on computer vision and edge AI. Published 25+ papers in top-tier conferences.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      availability: 'Available this week',
      languages: ['English', 'Hindi'],
      education: 'PhD Computer Science, IIT Delhi',
      specialties: ['Career Guidance', 'Technical Interviews', 'Research Mentoring']
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Principal Engineer at Intel',
      company: 'Intel',
      experience: '12 years',
      expertise: ['Embedded Systems', 'IoT', 'Edge Computing'],
      rating: 4.8,
      sessions: 200,
      price: '₹3,000/hour',
      priceValue: 3000,
      bio: 'Hardware engineering expert with extensive experience in embedded systems and IoT product development.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      availability: 'Available next week',
      languages: ['English', 'Hindi', 'Tamil'],
      education: 'M.Tech ECE, IIT Bombay',
      specialties: ['Hardware Design', 'Product Development', 'Team Leadership']
    },
    {
      id: 3,
      name: 'Sarah Chen',
      role: 'Data Science Manager at Microsoft',
      company: 'Microsoft',
      experience: '6 years',
      expertise: ['Data Science', 'Machine Learning', 'Product Analytics'],
      rating: 4.7,
      sessions: 120,
      price: '₹2,200/hour',
      priceValue: 2200,
      bio: 'Data science leader managing ML products at Microsoft. Expert in translating business problems into data solutions.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      availability: 'Available today',
      languages: ['English', 'Mandarin'],
      education: 'MS Data Science, Stanford University',
      specialties: ['Data Strategy', 'ML Product Development', 'Analytics']
    },
    {
      id: 4,
      name: 'Arjun Patel',
      role: 'Startup Founder & CTO',
      company: 'TechVenture AI',
      experience: '10 years',
      expertise: ['Entrepreneurship', 'Product Management', 'AI Strategy'],
      rating: 4.9,
      sessions: 180,
      price: '₹4,000/hour',
      priceValue: 4000,
      bio: 'Serial entrepreneur with 2 successful exits. Currently building AI-first products and mentoring early-stage startups.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      availability: 'Available this week',
      languages: ['English', 'Hindi', 'Gujarati'],
      education: 'MBA IIM Ahmedabad, B.Tech IIT Kanpur',
      specialties: ['Startup Strategy', 'Fundraising', 'Product-Market Fit']
    },
    {
      id: 5,
      name: 'Dr. Meera Reddy',
      role: 'Robotics Research Scientist',
      company: 'ISRO',
      experience: '15 years',
      expertise: ['Robotics', 'Space Technology', 'Control Systems'],
      rating: 4.8,
      sessions: 95,
      price: '₹2,800/hour',
      priceValue: 2800,
      bio: 'Leading robotics research for space missions at ISRO. Expert in autonomous systems and space robotics.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      availability: 'Available next month',
      languages: ['English', 'Hindi', 'Telugu'],
      education: 'PhD Robotics, IISc Bangalore',
      specialties: ['Research Guidance', 'Space Technology', 'Academic Career']
    },
    {
      id: 6,
      name: 'Alex Rodriguez',
      role: 'Senior Software Engineer at Netflix',
      company: 'Netflix',
      experience: '7 years',
      expertise: ['Full Stack Development', 'System Design', 'Cloud Architecture'],
      rating: 4.6,
      sessions: 140,
      price: '₹2,600/hour',
      priceValue: 2600,
      bio: 'Full-stack engineer building scalable systems at Netflix. Passionate about mentoring junior developers.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      availability: 'Available this week',
      languages: ['English', 'Spanish'],
      education: 'MS Computer Science, UC Berkeley',
      specialties: ['System Design', 'Code Reviews', 'Career Growth']
    }
  ];

  const expertiseAreas = [
    'Machine Learning',
    'Data Science',
    'Embedded Systems',
    'Robotics',
    'Entrepreneurship',
    'Full Stack Development',
    'Product Management',
    'AI Strategy'
  ];

  const experienceLevels = [
    '5-7 years',
    '8-10 years',
    '10+ years'
  ];

  const getAvailabilityColor = (availability: string) => {
    if (availability.includes('today')) return 'bg-green-100 text-green-800';
    if (availability.includes('week')) return 'bg-blue-100 text-blue-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesExpertise = selectedExpertise === 'all' || 
                            mentor.expertise.includes(selectedExpertise);
    
    const matchesExperience = selectedExperience === 'all' || 
                             (selectedExperience === '5-7 years' && parseInt(mentor.experience) >= 5 && parseInt(mentor.experience) <= 7) ||
                             (selectedExperience === '8-10 years' && parseInt(mentor.experience) >= 8 && parseInt(mentor.experience) <= 10) ||
                             (selectedExperience === '10+ years' && parseInt(mentor.experience) >= 10);
    
    const matchesPrice = selectedPrice === 'all' ||
                        (selectedPrice === 'budget' && mentor.priceValue <= 2500) ||
                        (selectedPrice === 'premium' && mentor.priceValue > 2500);
    
    return matchesSearch && matchesExpertise && matchesExperience && matchesPrice;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Connect with Industry Mentors</h1>
          <p className="text-gray-600 mt-2">Get personalized guidance from experienced professionals in your field</p>
        </div>

        {/* Search and Filters */}
        <Card className="rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="h-5 w-5 mr-2 text-blue-600" />
              Find Your Perfect Mentor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search mentors, skills, companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedExpertise} onValueChange={setSelectedExpertise}>
                <SelectTrigger>
                  <SelectValue placeholder="Expertise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Expertise</SelectItem>
                  {expertiseAreas.map((area) => (
                    <SelectItem key={area} value={area}>
                      {area}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Experience</SelectItem>
                  {experienceLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="budget">Budget (≤₹2,500)</SelectItem>
                  <SelectItem value="premium">Premium (&gt;₹2,500)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Premium Feature Banner */}
        <Card className="rounded-xl shadow-lg bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                  👑 Premium Feature: 1-on-1 Mentorship
                </h3>
                <p className="text-yellow-700">
                  Connect directly with industry experts for personalized career guidance
                </p>
              </div>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                Upgrade to Premium
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Found {filteredMentors.length} mentor{filteredMentors.length !== 1 ? 's' : ''}
          </p>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900">{mentor.name}</h3>
                    <p className="text-sm text-gray-600">{mentor.role}</p>
                    <p className="text-sm text-blue-600">{mentor.company}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      Experience
                    </span>
                    <span className="font-medium">{mentor.experience}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-600">
                      <Star className="h-4 w-4 mr-1" />
                      Rating
                    </span>
                    <span className="font-medium">⭐ {mentor.rating} ({mentor.sessions} sessions)</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-600">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Price
                    </span>
                    <span className="font-medium text-green-600">{mentor.price}</span>
                  </div>
                </div>

                <div>
                  <Badge className={`text-xs ${getAvailabilityColor(mentor.availability)}`}>
                    {mentor.availability}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900">Expertise</h4>
                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {mentor.expertise.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{mentor.expertise.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {mentor.specialties.map((specialty) => (
                      <Badge key={specialty} className="bg-purple-100 text-purple-800 text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">{mentor.bio}</p>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Session
                  </Button>
                  <Button size="sm" variant="outline">
                    <Video className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <Card className="rounded-xl shadow-lg">
            <CardContent className="p-12 text-center">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No mentors found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find more mentors.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}