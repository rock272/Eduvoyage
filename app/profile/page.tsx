'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/contexts/language-context';
import { useAuth } from '@/contexts/auth-context';
import { User, GraduationCap, Heart, Settings, Crown, Zap } from 'lucide-react';

export default function ProfilePage() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [tier2Optimized, setTier2Optimized] = useState(false);
  const [premiumUser, setPremiumUser] = useState(false);

  const [profile, setProfile] = useState({
    name: user?.name || '',
    email: user?.email || '',
    yearOfStudy: '3rd Year',
    stream: 'Computer Science Engineering',
    college: 'Indian Institute of Technology',
    interests: ['Artificial Intelligence', 'Machine Learning', 'Robotics', 'Entrepreneurship'],
    careerGoals: 'AI Research Scientist',
    location: 'Bangalore, India'
  });

  const streams = [
    'Computer Science Engineering',
    'Electronics & Communication Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Civil Engineering',
    'Information Technology',
    'Biotechnology',
    'Chemical Engineering'
  ];

  const yearOptions = [
    '1st Year',
    '2nd Year',
    '3rd Year',
    '4th Year',
    'Graduate',
    'Post Graduate'
  ];

  const interestOptions = [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Robotics',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Cloud Computing',
    'Blockchain',
    'IoT',
    'Entrepreneurship',
    'Product Management',
    'UI/UX Design',
    'Digital Marketing'
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save profile data
  };

  const toggleInterest = (interest: string) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{t('profile')}</h1>
            <p className="text-gray-600 mt-2">Manage your academic profile and preferences</p>
          </div>
          <Button
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? 'outline' : 'default'}
            className={isEditing ? '' : 'bg-blue-600 hover:bg-blue-700'}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      value={profile.email}
                      onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profile.location}
                      onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="college">College/University</Label>
                    <Input
                      id="college"
                      value={profile.college}
                      onChange={(e) => setProfile(prev => ({ ...prev, college: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-green-600" />
                  Academic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="stream">Stream of Study</Label>
                    <Select
                      value={profile.stream}
                      onValueChange={(value) => setProfile(prev => ({ ...prev, stream: value }))}
                      disabled={!isEditing}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {streams.map((stream) => (
                          <SelectItem key={stream} value={stream}>
                            {stream}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="year">Year of Study</Label>
                    <Select
                      value={profile.yearOfStudy}
                      onValueChange={(value) => setProfile(prev => ({ ...prev, yearOfStudy: value }))}
                      disabled={!isEditing}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {yearOptions.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="goals">Career Goals</Label>
                  <Input
                    id="goals"
                    value={profile.careerGoals}
                    onChange={(e) => setProfile(prev => ({ ...prev, careerGoals: e.target.value }))}
                    disabled={!isEditing}
                    placeholder="e.g., AI Research Scientist, Product Manager"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  Interests & Passions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Select your areas of interest to get personalized recommendations
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {interestOptions.map((interest) => (
                      <button
                        key={interest}
                        onClick={() => isEditing && toggleInterest(interest)}
                        disabled={!isEditing}
                        className={`p-2 text-sm rounded-lg border transition-colors ${
                          profile.interests.includes(interest)
                            ? 'bg-blue-100 border-blue-300 text-blue-800'
                            : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                        } ${!isEditing ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-sm text-gray-600">Selected:</span>
                    {profile.interests.map((interest) => (
                      <Badge key={interest} className="bg-blue-100 text-blue-800">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {isEditing && (
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                  Save Changes
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Premium Status */}
            <Card className="rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="h-5 w-5 mr-2 text-yellow-500" />
                  Membership Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center ${
                      premiumUser ? 'bg-yellow-100' : 'bg-gray-100'
                    }`}>
                      <Crown className={`h-8 w-8 ${premiumUser ? 'text-yellow-500' : 'text-gray-400'}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {premiumUser ? 'Premium Member' : 'Free Member'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {premiumUser ? 'Access to mentors & advanced features' : 'Basic career guidance'}
                    </p>
                  </div>
                  
                  {!premiumUser && (
                    <Button 
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                      onClick={() => setPremiumUser(true)}
                    >
                      Upgrade to Premium
                    </Button>
                  )}
                  
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>✓ AI Career Assistant</p>
                    <p>✓ Course Recommendations</p>
                    <p>✓ Job Suggestions</p>
                    {premiumUser && (
                      <>
                        <p>✓ Mentor Connections</p>
                        <p>✓ Priority Support</p>
                        <p>✓ Advanced Analytics</p>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card className="rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-gray-600" />
                  Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="tier2">Tier 2 Optimized</Label>
                    <p className="text-xs text-gray-600">Lightweight mode for slower connections</p>
                  </div>
                  <Switch
                    id="tier2"
                    checked={tier2Optimized}
                    onCheckedChange={setTier2Optimized}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notifications">Email Notifications</Label>
                    <p className="text-xs text-gray-600">Career updates and recommendations</p>
                  </div>
                  <Switch id="notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="analytics">Usage Analytics</Label>
                    <p className="text-xs text-gray-600">Help improve our recommendations</p>
                  </div>
                  <Switch id="analytics" defaultChecked />
                </div>
              </CardContent>
            </Card>

            {/* Activity Summary */}
            <Card className="rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-purple-600" />
                  Activity Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Courses Saved</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Jobs Bookmarked</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">AI Queries</span>
                  <span className="font-semibold">45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Profile Views</span>
                  <span className="font-semibold">23</span>
                </div>
                {premiumUser && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Mentor Sessions</span>
                    <span className="font-semibold">3</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}