import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function TemplatePage() {
  const { type } = useParams();

  // Simple formatting for the type parameter
  const title = type ? type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Template';

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            This is a placeholder page for the <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">{title}</strong> template.
            You can dynamically construct the page content based on the URL parameter.
          </p>
          
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Ready to build this section?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Create a custom layout for this section using our design system and components.
            </p>
            <div className="flex max-sm:flex-col justify-center gap-4">
              <Button variant="primary" size="lg" className="group">
                Start Building
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
