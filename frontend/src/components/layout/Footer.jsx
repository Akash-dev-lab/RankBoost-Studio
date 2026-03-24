import React from 'react';
import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-xl">
                R
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                RankBoost
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
              We build high-performance, beautiful websites to help local businesses scale and succeed online.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><NavLink to="/template/about" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">About Us</NavLink></li>
              <li><NavLink to="/template/careers" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Careers</NavLink></li>
              <li><NavLink to="/template/contact" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><NavLink to="/template/web-design" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Web Design</NavLink></li>
              <li><NavLink to="/template/seo" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">SEO Optimization</NavLink></li>
              <li><NavLink to="/template/marketing" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Digital Marketing</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><NavLink to="/template/privacy" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/template/terms" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition-colors">Terms of Service</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} RankBoost Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
