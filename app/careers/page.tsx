'use client';

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { CareerExplorer } from '@/components/careers/career-explorer';
import { useLanguage } from '@/contexts/language-context';

export default function CareersPage() {
  const { t } = useLanguage();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('careers')}</h1>
          <p className="text-gray-600 mt-2">{t('careersSubtitle')}</p>
        </div>
        
        <CareerExplorer />
      </div>
    </DashboardLayout>
  );
}