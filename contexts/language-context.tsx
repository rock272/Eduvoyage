'use client';

import { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Auth
    authSubtitle: 'Discover your perfect hybrid career path',
    authDescription: 'Join thousands of students finding their unique career combinations',
    welcome: 'Welcome to EduVoyage',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    email: 'Email',
    password: 'Password',
    emailPlaceholder: 'Enter your email',
    passwordPlaceholder: 'Enter your password',
    continueWithGoogle: 'Continue with Google',
    or: 'OR',
    
    // Navigation
    dashboard: 'Dashboard',
    quiz: 'Quiz',
    careers: 'Careers',
    certifications: 'Certifications',
    webinars: 'Webinars',
    profile: 'Profile',
    parents: 'Parents',
    settings: 'Settings',
    
    // Dashboard
    dashboardSubtitle: 'Your personalized career journey starts here',
    careerConfidenceScore: 'Career Confidence Score',
    upcomingWebinars: 'Upcoming Webinars',
    recommendedCareers: 'Recommended Career Paths',
    certificationProgress: 'Certification Progress',
    recentActivity: 'Recent Activity',
    
    // Quiz
    careerQuiz: 'AI Career Quiz',
    quizSubtitle: 'Discover your perfect hybrid career in 10 questions',
    
    // Careers
    careersSubtitle: 'Explore innovative career combinations',
    
    // Parent Portal
    parentPortal: 'Parent Portal',
    parentPortalSubtitle: 'Track your child\'s career development',
    
    // Common
    loading: 'Loading...',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    viewAll: 'View All',
    previous: 'Previous',
    next: 'Next',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
  },
  hi: {
    // Auth
    authSubtitle: 'अपना परफेक्ट हाइब्रिड करियर पाथ खोजें',
    authDescription: 'हजारों छात्रों के साथ जुड़ें जो अपने यूनीक करियर कॉम्बिनेशन खोज रहे हैं',
    welcome: 'EduVoyage में आपका स्वागत है',
    signIn: 'साइन इन',
    signUp: 'साइन अप',
    email: 'ईमेल',
    password: 'पासवर्ड',
    emailPlaceholder: 'अपना ईमेल दर्ज करें',
    passwordPlaceholder: 'अपना पासवर्ड दर्ज करें',
    continueWithGoogle: 'Google के साथ जारी रखें',
    or: 'या',
    
    // Navigation
    dashboard: 'डैशबोर्ड',
    quiz: 'क्विज़',
    careers: 'करियर',
    certifications: 'सर्टिफिकेशन',
    webinars: 'वेबिनार',
    profile: 'प्रोफाइल',
    parents: 'माता-पिता',
    settings: 'सेटिंग्स',
    
    // Dashboard
    dashboardSubtitle: 'आपकी व्यक्तिगत करियर यात्रा यहाँ से शुरू होती है',
    careerConfidenceScore: 'करियर कॉन्फिडेंस स्कोर',
    upcomingWebinars: 'आगामी वेबिनार',
    recommendedCareers: 'सुझाए गए करियर पाथ',
    certificationProgress: 'सर्टिफिकेशन प्रगति',
    recentActivity: 'हाल की गतिविधि',
    
    // Quiz
    careerQuiz: 'AI करियर क्विज़',
    quizSubtitle: '10 सवालों में अपना परफेक्ट हाइब्रिड करियर खोजें',
    
    // Careers
    careersSubtitle: 'इनोवेटिव करियर कॉम्बिनेशन एक्सप्लोर करें',
    
    // Parent Portal
    parentPortal: 'पैरेंट पोर्टल',
    parentPortalSubtitle: 'अपने बच्चे के करियर डेवलपमेंट को ट्रैक करें',
    
    // Common
    loading: 'लोड हो रहा है...',
    getStarted: 'शुरू करें',
    learnMore: 'और जानें',
    viewAll: 'सभी देखें',
    previous: 'पिछला',
    next: 'अगला',
    submit: 'सबमिट करें',
    cancel: 'रद्द करें',
    save: 'सेव करें',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}