import React from 'react';
import { Zap, TrendingUp, MessageCircle, Briefcase } from 'lucide-react';

const trustItems = [
  { text: 'Loads in under 2 seconds', icon: Zap },
  { text: 'SEO optimized', icon: TrendingUp },
  { text: 'Direct WhatsApp leads', icon: MessageCircle },
  { text: 'Designed for local businesses', icon: Briefcase },
];

export function TrustBar() {
  return (
    <div className="pt-8 pb-4 border-t border-gray-200/50 dark:border-gray-800/50 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-center gap-4 sm:gap-8">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-2.5 dark:bg-gray-900/30 px-3 py-1.5 rounded-full shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
