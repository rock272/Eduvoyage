'use client';

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { CareerConfidenceWidget } from '@/components/dashboard/career-confidence-widget';
import { WebinarCalendar } from '@/components/dashboard/webinar-calendar';
import { RecommendedCareers } from '@/components/dashboard/recommended-careers';
import { CertificationProgress } from '@/components/dashboard/certification-progress';
import { ActivityFeed } from '@/components/dashboard/activity-feed';
import { useLanguage } from '@/contexts/language-context';

export default function DashboardPage() {
  const { t } = useLanguage();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('dashboard')}</h1>
          <p className="text-gray-600 mt-2">{t('dashboardSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <CareerConfidenceWidget />
            <RecommendedCareers />
            <CertificationProgress />
          </div>
          
          <div className="space-y-6">
            <WebinarCalendar />
            <ActivityFeed />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}