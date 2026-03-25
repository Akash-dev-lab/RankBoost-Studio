import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';

const templates = [
  {
    id: 'gym',
    name: 'Fitness & Gym',
    benefit: 'Get more member signups with high-converting trial offers.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'salon',
    name: 'Salon & Spa',
    benefit: 'Fill your booking calendar with an elegant, modern showcase.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'restaurant',
    name: 'Restaurant & Cafe',
    benefit: 'Drive direct orders and reservations without third-party fees.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'clinic',
    name: 'Dental & Medical',
    benefit: 'Build patient trust instantly with a professional clinic presence.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
  }
];

export function Templates() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300" id="templates">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
            Proven Templates for Local Businesses
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose a high-converting, SEO-optimized layout tailored to your specific industry. We set it up for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {templates.map((tpl) => (
            <div 
              key={tpl.id} 
              className="group flex flex-col bg-white dark:bg-gray-950 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl dark:shadow-none hover:-translate-y-1 hover:ring-1 ring-indigo-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img 
                  src={tpl.image} 
                  alt={`${tpl.name} Website Template Demo`} 
                  loading="lazy" 
                  width="800" 
                  height="450" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {tpl.name}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-8 flex-1">
                  {tpl.benefit}
                </p>

                <div className="flex flex-col xl:flex-row gap-4 pt-6 mt-auto border-t border-gray-100 dark:border-gray-800">
                  <Link 
                    to={`/template/${tpl.id}`} 
                    className="w-full xl:w-1/2"
                  >
                    <Button variant="outline" className="w-full justify-center rounded-xl py-3 text-base shadow-xs shadow-black/5 border-gray-200 dark:border-gray-700 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900" aria-label={`View Live Demo for ${tpl.name}`}>
                      <ExternalLink className="mr-2 w-4 h-4 shrink-0" />
                      View Demo
                    </Button>
                  </Link>

                  <Link 
                    to={`/template/${tpl.id}?use=true`} 
                    className="w-full xl:w-1/2"
                  >
                    <Button className="w-full justify-center rounded-xl py-3 text-base shadow-md hover:shadow-indigo-500/25 transition-shadow" aria-label={`Use this template for ${tpl.name}`}>
                      Use This Template
                      <ArrowRight className="ml-2 w-4 h-4 shrink-0" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
