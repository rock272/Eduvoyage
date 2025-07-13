'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { Activity, Trophy, BookOpen, Users, Target } from 'lucide-react';

export function ActivityFeed() {
  const { t } = useLanguage();

  const activities = [
    {
      id: 1,
      type: 'achievement',
      title: 'Completed AI Quiz',
      description: 'Scored 85% on Career Aptitude Assessment',
      time: '2 hours ago',
      icon: Trophy,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
    {
      id: 2,
      type: 'learning',
      title: 'Started New Course',
      description: 'Enrolled in "Game Design Fundamentals"',
      time: '1 day ago',
      icon: BookOpen,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      id: 3,
      type: 'social',
      title: 'Joined Study Group',
      description: 'Medical Technology Career Explorers',
      time: '2 days ago',
      icon: Users,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      id: 4,
      type: 'goal',
      title: 'Updated Career Goal',
      description: 'Set target: VR Healthcare Developer',
      time: '3 days ago',
      icon: Target,
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Badge Earned',
      description: 'Technology Pioneer - First hybrid career match',
      time: '1 week ago',
      icon: Trophy,
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
  ];

  const formatTime = (time: string) => {
    return time;
  };

  return (
    <Card className="rounded-xl shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-lg font-semibold">
          <Activity className="h-5 w-5 mr-2 text-blue-600" />
          {t('recentActivity')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`p-2 rounded-full ${activity.bgColor}`}>
                <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900 truncate">
                    {activity.title}
                  </h4>
                  <span className="text-xs text-gray-500 ml-2">
                    {formatTime(activity.time)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-gray-200">
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              View All Activity
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}