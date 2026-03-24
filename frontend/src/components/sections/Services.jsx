import React from 'react';
import { Monitor, TrendingUp, Search, PenTool } from 'lucide-react';

const services = [
  {
    title: 'Custom Web Design',
    description: 'Beautiful, conversion-focused websites tailored specifically for your brand and target audience.',
    icon: Monitor,
  },
  {
    title: 'Local SEO Mastery',
    description: 'Dominate local search rankings and connect with high-intent customers right in your area.',
    icon: Search,
  },
  {
    title: 'Performance Marketing',
    description: 'Data-driven ad campaigns designed to maximize ROI and scale your business consistently.',
    icon: TrendingUp,
  },
  {
    title: 'Brand Identity',
    description: 'Stand out from competitors with cohesive, memorable branding that resonates with your market.',
    icon: PenTool,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to grow online
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            We provide a comprehensive suite of digital services designed to elevate your online presence and bring you more customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
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
