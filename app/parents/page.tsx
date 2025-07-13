'use client';

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { ParentPortal } from '@/components/parents/parent-portal';
import { useLanguage } from '@/contexts/language-context';

export default function ParentsPage() {
  const { t } = useLanguage();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('parentPortal')}</h1>
          <p className="text-gray-600 mt-2">{t('parentPortalSubtitle')}</p>
        </div>
        
        <ParentPortal />
      </div>
    </DashboardLayout>
  );
}