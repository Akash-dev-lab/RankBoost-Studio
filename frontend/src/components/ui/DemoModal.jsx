import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { LeadForm } from './LeadForm';

export function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSuccess(false);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    window.addEventListener('open-demo-modal', handleOpen);
    return () => window.removeEventListener('open-demo-modal', handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setIsSuccess(false), 300); // Reset after closing animation
    document.body.style.overflow = '';
  };

  const handleSuccess = () => {
    setIsSuccess(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white dark:bg-gray-950 rounded-3xl sm:rounded-4xl shadow-2xl overflow-y-auto max-h-[95dvh] sm:max-h-[90dvh] transform transition-all animate-in fade-in zoom-in-95 duration-200 border border-gray-100 dark:border-gray-800 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <button 
          onClick={handleClose}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 sm:p-10">
          {!isSuccess ? (
            <>
              <div className="mb-8 pr-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                  Get your custom website demo in 24 hours
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Fill out the details below and we'll instantly connect with you on WhatsApp to kick things off.
                </p>
              </div>
              <LeadForm onSuccess={handleSuccess} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-10 fade-in animate-in duration-500">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Request Received!
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xs mx-auto">
                We are redirecting you to WhatsApp to complete the setup...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
