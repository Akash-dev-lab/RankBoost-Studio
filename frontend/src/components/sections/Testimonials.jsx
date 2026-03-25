import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Local Gym Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    feedback: "Got 30+ new membership leads in the first month. The WhatsApp integration changed our entire sales process.",
  },
  {
    name: "David Chen",
    role: "Dental Clinic Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    feedback: "Patient bookings increased by 45%. The new website is lightning fast and looks incredibly professional.",
  },
  {
    name: "Elena Rodriguez",
    role: "Salon Boutique Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    feedback: "We stopped paying third-party booking fees. Ranking #1 on local search brought us more walk-ins than ever.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/30 transition-colors duration-300" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            Don't Just Take Our Word For It
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See how local businesses are generating real growth and saving money with our customized digital setups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col p-8 lg:p-10 bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm"
            >
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              
              <blockquote className="flex-1 text-xl font-medium text-gray-900 dark:text-gray-100 mb-8 leading-relaxed">
                "{testimonial.feedback}"
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  loading="lazy"
                  width="48"
                  height="48"
                  className="w-12 h-12 rounded-full object-cover bg-gray-100 dark:bg-gray-800 shrink-0"
                />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
