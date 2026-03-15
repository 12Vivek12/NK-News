'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('india'), href: '/category/india' },
    { name: t('world'), href: '/category/world' },
    { name: t('politics'), href: '/category/politics' },
    { name: t('business'), href: '/category/business' },
    { name: t('tech'), href: '/category/technology' },
    { name: t('sports'), href: '/category/sports' },
    { name: t('entertainment'), href: '/category/entertainment' },
    { name: t('health'), href: '/category/health' },
    { name: t('education'), href: '/category/education' },
    { name: t('opinion'), href: '/category/opinion' },
  ];

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-between items-center py-4 border-b">
          <div className="flex gap-4">
            <button 
              onClick={() => setLanguage('en')}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${language === 'en' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage('hi')}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors ${language === 'hi' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              हिंदी
            </button>
          </div>
          
          <Link href="/" className="text-4xl font-black font-serif tracking-tighter hover:opacity-80 transition-opacity">
            NK NEWS
          </Link>
          
          <div className="flex gap-3">
            <Link 
              href="/login" 
              className="px-6 py-2 border border-black text-sm font-bold uppercase tracking-tight hover:bg-black hover:text-white transition-all rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              {t('signIn')}
            </Link>
            <Link 
              href="/subscribe" 
              className="px-6 py-2 bg-[#ff0000] text-white text-sm font-bold uppercase tracking-tight hover:bg-black transition-all rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            >
              {t('subscribe')}
            </Link>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex justify-start py-3 overflow-x-auto no-scrollbar gap-8">
          <Link href="/" className="text-sm font-extrabold uppercase whitespace-nowrap border-b-2 border-transparent hover:border-black transition-all">
            {t('home')}
          </Link>
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-sm font-semibold text-gray-600 hover:text-black uppercase whitespace-nowrap transition-all border-b-2 border-transparent hover:border-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
