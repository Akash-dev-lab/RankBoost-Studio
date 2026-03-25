import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export function CTA() {
  return (
    <section className="py-24 bg-indigo-600 dark:bg-indigo-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6 leading-tight">
            Ready to Get More Customers?
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed text-indigo-100 max-w-2xl mx-auto mb-10 font-medium">
            Get your website demo in 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto px-10 py-5 text-lg font-bold rounded-2xl bg-white text-indigo-600 hover:bg-indigo-50 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              aria-label="Get Free Demo"
              onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
            >
              Get Free Demo
              <ArrowRight className="ml-2 w-6 h-6 shrink-0" aria-hidden="true" />
            </Button>
            <a
              href="https://wa.me/+918923101766"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="w-full sm:w-auto px-10 py-5 text-lg font-bold rounded-2xl border-2 border-indigo-400/50 text-white bg-indigo-700/30 hover:bg-indigo-700/80 hover:border-indigo-400 transition-colors flex items-center justify-center" aria-label="WhatsApp Now">
                <MessageCircle className="mr-2 w-6 h-6 shrink-0" aria-hidden="true" />
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
