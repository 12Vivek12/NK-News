'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function LoginPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-xl shadow-2xl border border-gray-100">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-black mb-2 tracking-tighter">NK NEWS</h1>
          <p className="text-gray-500 font-medium">{t('signIn')} to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-all shadow-lg transform hover:-translate-y-1"
          >
            {t('signIn')}
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-gray-500 italic">Don't have an account? </span>
          <Link href="/subscribe" className="font-bold text-red-600 hover:underline underline-offset-4">
            {t('subscribe')} now
          </Link>
        </div>
      </div>
    </div>
  );
}
