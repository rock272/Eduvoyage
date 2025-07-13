'use client';

import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { CareerQuiz } from '@/components/quiz/career-quiz';
import { useLanguage } from '@/contexts/language-context';

export default function QuizPage() {
  const { t } = useLanguage();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('careerQuiz')}</h1>
          <p className="text-gray-600 mt-2">{t('quizSubtitle')}</p>
        </div>
        
        <CareerQuiz />
      </div>
    </DashboardLayout>
  );
}