import React from 'react';
import { MonitorSmartphone, Target, Zap, MessageSquare } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    description: 'We build customer-generating machines, not just digital brochures.',
    icon: MonitorSmartphone,
  },
  {
    title: 'SEO Optimization',
    description: 'Rank higher on Google to capture high-intent local customers.',
    icon: Target,
  },
  {
    title: 'Speed Optimization',
    description: 'Lightning-fast loading speeds so you never lose an impatient visitor.',
    icon: Zap,
  },
  {
    title: 'Lead Generation Setup',
    description: 'Direct WhatsApp integration and forms that turn traffic into paying clients.',
    icon: MessageSquare,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-base font-bold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-4">
            Real Business Growth
          </h2>
          <p className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6 leading-tight">
            We don't just build websites.<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              We build your bottom line.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col p-8 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 shrink-0" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
