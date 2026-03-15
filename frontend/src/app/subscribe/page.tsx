'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function SubscribePage() {
  const { t } = useLanguage();

  const plans = [
    {
      name: 'Digital Basic',
      price: '₹149',
      period: 'per month',
      features: ['Unlimited digital access', 'Ad-lite experience', 'Archive access'],
      color: 'bg-gray-100',
      button: 'bg-black text-white'
    },
    {
      name: 'All Access',
      price: '₹999',
      period: 'per year',
      features: ['Everything in Basic', 'Exclusive webinars', 'Digital replica of print', 'Gift subscriptions'],
      color: 'bg-red-50 border-2 border-red-600',
      button: 'bg-red-600 text-white',
      badge: 'Bestseller'
    },
    {
      name: 'Student',
      price: '₹49',
      period: 'per month',
      features: ['For verified students', 'Career guidance docs', 'Mental health newsletter'],
      color: 'bg-gray-100',
      button: 'bg-black text-white'
    }
  ];

  return (
    <div className="bg-white min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-black mb-4 tracking-tighter uppercase">{t('subscribe')} to Excellence</h1>
          <p className="text-xl text-gray-600 font-medium">Join 2 million members who trust NK News for independent journalism.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative p-8 rounded-2xl flex flex-col items-center text-center transition-all hover:shadow-2xl hover:scale-105 duration-300 ${plan.color}`}>
              {plan.badge && (
                <span className="absolute -top-4 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest leading-none">
                  {plan.badge}
                </span>
              )}
              <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">{plan.name}</h2>
              <div className="mb-8">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="text-gray-500 block text-sm mt-1">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow text-left w-full">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium border-b pb-2">
                    <span className="text-green-600 text-lg">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm shadow-xl ${plan.button}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
          <h3 className="text-2xl font-bold mb-4 font-serif italic">Why subscribe?</h3>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            NK News is committed to fearless, evidence-based reporting. Subscriptions directly fund our investigative desk and ensure we remain free from corporate or government pressure.
          </p>
        </div>
      </div>
    </div>
  );
}
