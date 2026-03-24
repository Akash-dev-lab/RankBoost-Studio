import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { TrustBar } from './TrustBar';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950 pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pb-48 transition-colors duration-300">
      {/* Background gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <span className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-white/20 hover:ring-gray-900/20 dark:hover:ring-white/30 transition-all flex items-center gap-2 cursor-pointer bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              Announcing our new Web Design service.{' '}
              <a href="/template/new-service" className="font-semibold text-indigo-600 dark:text-indigo-400">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </div>
          
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl mb-8 leading-tight">
            We Help Local Businesses <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Get More Customers</span> Online
          </h1>
          
          <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Fast, SEO-optimized websites that bring real leads via Google & WhatsApp.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group rounded-full px-8 py-3.5 shadow-xl hover:shadow-indigo-500/25 transition-all text-base sm:text-lg w-full sm:w-auto">
              Get Free Website Demo
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-3.5 text-base sm:text-lg w-full sm:w-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
              View Demo
            </Button>
          </div>

          <div className="mt-16 sm:mt-24">
            <TrustBar />
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}
