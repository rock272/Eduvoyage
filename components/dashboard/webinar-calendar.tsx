'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { Calendar, Clock, Users, Video } from 'lucide-react';

export function WebinarCalendar() {
  const { t } = useLanguage();

  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI in Healthcare: Future Careers',
      date: '2024-01-15',
      time: '4:00 PM IST',
      duration: '1h 30m',
      attendees: 234,
      tags: ['AI', 'Healthcare'],
      speaker: 'Dr. Sarah Chen',
    },
    {
      id: 2,
      title: 'Gaming + Education: EdTech Careers',
      date: '2024-01-18',
      time: '6:00 PM IST',
      duration: '1h',
      attendees: 156,
      tags: ['Gaming', 'Education'],
      speaker: 'Alex Rodriguez',
    },
    {
      id: 3,
      title: 'Sustainable Tech Innovations',
      date: '2024-01-22',
      time: '5:00 PM IST',
      duration: '2h',
      attendees: 89,
      tags: ['Technology', 'Environment'],
      speaker: 'Dr. Priya Sharma',
    },
  ];

  return (
    <Card className="rounded-xl shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-lg font-semibold">
          <Calendar className="h-5 w-5 mr-2 text-blue-600" />
          {t('upcomingWebinars')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingWebinars.map((webinar) => (
            <div
              key={webinar.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">{webinar.title}</h4>
                  <p className="text-sm text-gray-600">by {webinar.speaker}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {webinar.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center text-sm text-gray-600 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Jan 15
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {webinar.time}
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {webinar.attendees}
                  </span>
                </div>

                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Video className="h-4 w-4 mr-2" />
                  Join Webinar
                </Button>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full">
            {t('viewAll')} Webinars
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}