import React, { useState } from 'react';
import { ArrowRight, AlertCircle, Phone } from 'lucide-react';
import { Button } from './Button';

// Replace with client's actual WhatsApp number
const WHATSAPP_NUMBER = "+918923101766";

const BUSINESS_TYPES = [
  "Gym / Fitness",
  "Salon / Spa",
  "Dental / Medical Clinic",
  "Restaurant / Cafe",
  "Real Estate",
  "Home Services (Plumbing, HVAC)",
  "Other"
];

export function LeadForm({ className = "", onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.businessType) newErrors.businessType = "Please select your business type";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Construct WhatsApp Message
      // "Hi, I want a website demo for my [business type]. My name is [name]."
      let waText = `Hi, I want a website demo for my ${formData.businessType}. My name is ${formData.name}.`;

      if (formData.message.trim()) {
        waText += `\n\nAdditional details: ${formData.message}`;
      }

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

      if (onSuccess) {
        onSuccess();
      }

      // Small artificial delay for visual feedback
      setTimeout(() => {
        setIsSubmitting(false);
        window.open(whatsappUrl, '_blank');
      }, onSuccess ? 1500 : 600); // Wait longer if showing success UI
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for field as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const inputClasses = "w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3.5 text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all";
  const labelClasses = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5";
  const errorClasses = "text-red-500 text-sm mt-1.5 flex items-center gap-1";

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-5 ${className}`}>
      {/* Name Field */}
      <div>
        <label htmlFor="name" className={labelClasses}>
          Full Name <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`${inputClasses} ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </div>
        {errors.name && (
          <p id="name-error" className={errorClasses}>
            <AlertCircle className="w-4 h-4" /> {errors.name}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className={labelClasses}>
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 8475 - XXXXXX"
            className={`${inputClasses} ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
        </div>
        {errors.phone && (
          <p id="phone-error" className={errorClasses}>
            <AlertCircle className="w-4 h-4" /> {errors.phone}
          </p>
        )}
      </div>

      {/* Business Type Dropdown */}
      <div>
        <label htmlFor="businessType" className={labelClasses}>
          Business Type <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className={`${inputClasses} appearance-none ${!formData.businessType ? 'text-gray-500' : ''} ${errors.businessType ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
            aria-invalid={errors.businessType ? 'true' : 'false'}
            aria-describedby={errors.businessType ? "business-error" : undefined}
          >
            <option value="" disabled>Select your industry</option>
            {BUSINESS_TYPES.map(type => (
              <option key={type} value={type} className="text-gray-900 dark:text-white">
                {type}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        {errors.businessType && (
          <p id="business-error" className={errorClasses}>
            <AlertCircle className="w-4 h-4" /> {errors.businessType}
          </p>
        )}
      </div>

      {/* Optional Message Field */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span className="text-gray-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          placeholder="Any specific requirements?"
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full mt-2 py-4 rounded-xl shadow-lg hover:shadow-indigo-500/25 group transition-all"
        disabled={isSubmitting}
      >
        <Phone className={`mr-2 w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
        {isSubmitting ? 'Connecting...' : 'Get Free Website Demo'}
        {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 border-l border-white/20 pl-2 opacity-80 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />}
      </Button>

      <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
        By clicking, you will be redirected to WhatsApp to complete your request.
      </p>
    </form>
  );
}
