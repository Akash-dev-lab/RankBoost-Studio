import React from 'react';
import { LeadForm } from '../components/ui/LeadForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24 bg-gray-50/50 dark:bg-gray-900 min-h-[80vh] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column: Contact Info */}
          <div className="flex-1 lg:py-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
              Let's build your <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">customer engine</span>.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              Ready to stop losing customers to competitors? Fill out the form to get a free, custom website demo tailored specifically to your business within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">WhatsApp / Call</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">+91 8923101766</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">gaurakash014@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">Chhijarsi, Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0">
            <div className="bg-white dark:bg-gray-950 p-8 sm:p-10 rounded-4xl shadow-xl shadow-black/5 dark:shadow-none border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Request Your Free Demo
              </h2>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
