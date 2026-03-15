'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    signIn: 'Sign In',
    subscribe: 'Subscribe',
    home: 'Home',
    breaking: 'Breaking',
    trending: 'Trending',
    readMore: 'Read More',
    india: 'India',
    world: 'World',
    politics: 'Politics',
    business: 'Business',
    tech: 'Technology',
    sports: 'Sports',
    entertainment: 'Entertainment',
    health: 'Health',
    education: 'Education',
    opinion: 'Opinion',
    footerDesc: 'Providing verified and reliable news from India and across the globe.',
    rights: 'All rights reserved',
  },
  hi: {
    signIn: 'साइन इन',
    subscribe: 'सब्सक्राइब',
    home: 'होम',
    breaking: 'ब्रेकिंग न्यूज़',
    trending: 'Trending',
    readMore: 'और पढ़ें',
    india: 'भारत',
    world: 'दुनिया',
    politics: 'राजनीति',
    business: 'बिज़नेस',
    tech: 'टेक्नोलॉजी',
    sports: 'खेल',
    entertainment: 'मनोरंजन',
    health: 'स्वास्थ्य',
    education: 'शिक्षा',
    opinion: 'ओपिनियन',
    footerDesc: 'भारत और दुनिया भर से प्रमाणित और विश्वसनीय समाचार प्रदान करना।',
    rights: 'सर्वाधिकार सुरक्षित',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
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
