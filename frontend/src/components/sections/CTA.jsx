import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-indigo-600 dark:bg-indigo-900 rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-700 dark:from-indigo-800 dark:to-purple-900 opacity-90" />
          
          <div className="relative p-12 sm:p-20 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
              Ready to transform your digital presence?
            </h2>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
              Join dozens of local businesses who have skyrocketed their growth with our custom web and marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-50 group px-8">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
