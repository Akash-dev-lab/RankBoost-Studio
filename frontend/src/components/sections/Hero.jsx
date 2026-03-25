import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative bg-white dark:bg-gray-950 pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pb-32 transition-colors duration-300">
      {/* Minimal background texture (no heavy gradients or blur) */}
      <div 
        className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-size-[16px_16px] opacity-70" 
        aria-hidden="true" 
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-7xl mb-6 leading-tight">
            We Build Websites That Bring You Customers
          </h1>

          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            High-performance, SEO-optimized websites designed to generate leads from Google and WhatsApp.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full" aria-label="Get Free Demo">
              Get Free Demo
              <ArrowRight className="ml-2 w-5 h-5 shrink-0" aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors" aria-label="View Live Demo">
              View Live Demo
            </Button>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-900">
            <ul className="grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-4 justify-center items-center text-sm font-medium text-gray-700 dark:text-gray-300 p-0 m-0 list-none">
              <li className="flex flex-col items-center gap-3">
                <span className="text-2xl" aria-hidden="true">⚡</span>
                <span>Loads under 2s</span>
              </li>
              <li className="flex flex-col items-center gap-3">
                <span className="text-2xl" aria-hidden="true">📈</span>
                <span>SEO Optimized</span>
              </li>
              <li className="flex flex-col items-center gap-3">
                <span className="text-2xl" aria-hidden="true">📲</span>
                <span>WhatsApp Leads</span>
              </li>
              <li className="flex flex-col items-center gap-3">
                <span className="text-2xl" aria-hidden="true">💼</span>
                <span>Built for Local Business</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
