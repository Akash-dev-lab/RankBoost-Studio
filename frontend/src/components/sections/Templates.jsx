import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

import { templates } from '../../utils/templates';

// For the landing page, we'll show one featured template from each major category
const featuredTemplates = [
  templates.find(t => t.category === 'gym'),
  templates.find(t => t.category === 'salon'),
  templates.find(t => t.category === 'healthcare')
].filter(Boolean);

function TemplateCard({ template }) {
  const [showMetrics, setShowMetrics] = useState(false);

  return (
    <div className="group relative flex flex-col bg-[#121826] rounded-2xl overflow-hidden border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgb(79,70,229,0.15)]">
      {/* Top Area: Image */}
      <div className="relative aspect-16/10 overflow-hidden bg-[#0B0F1A]">
        <img 
          src={template.image} 
          alt={template.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        {/* Subtle glow overlay at the bottom of the image for blending */}
        <div className="absolute inset-0 bg-linear-to-t from-[#121826] via-transparent to-transparent opacity-90" />
      </div>

      {/* Middle & Content */}
      <div className="flex flex-col flex-1 p-6 relative z-10">
        <div className="mb-5 flex flex-col items-start min-h-20">
          <span className="inline-flex px-3 py-1 text-[11px] font-bold tracking-wide text-indigo-300 bg-indigo-500/10 rounded-full mb-3 border border-indigo-500/20 uppercase">
            {template.tag}
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {template.name}
          </h3>
        </div>

        {/* Performance Dropdown Toggle */}
        <button 
          onClick={() => setShowMetrics(!showMetrics)}
          className="flex items-center justify-between w-full py-3 px-4 bg-[#0B0F1A] rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-colors text-gray-300 text-sm font-semibold mb-5 focus:outline-none"
        >
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="text-base">⚡</span> View Performance
          </span>
          {showMetrics ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {/* Expandable Metrics Menu */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${showMetrics ? 'max-h-72 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
        >
          <div className="p-5 bg-linear-to-b from-[#0B0F1A] to-[#0d121c] rounded-xl border border-gray-800/80 space-y-4 shadow-inner">
            
            {/* Perf */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"><span aria-hidden="true">🚀</span> Performance</span>
                <span className="text-green-400 font-bold">{template.metrics.perf}+</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-green-400 h-full rounded-full transition-all duration-1000 ease-in-out" style={{ width: showMetrics ? `${template.metrics.perf}%` : '0%' }}></div>
              </div>
            </div>

            {/* SEO */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"><span aria-hidden="true">🔍</span> SEO Score</span>
                <span className="text-green-400 font-bold">{template.metrics.seo}+</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-green-400 h-full rounded-full transition-all duration-1000 ease-in-out delay-100" style={{ width: showMetrics ? `${template.metrics.seo}%` : '0%' }}></div>
              </div>
            </div>

            {/* Grid Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-gray-800/30 rounded-lg p-2.5 text-center border border-gray-700/50 flex flex-col items-center justify-center">
                <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Load Time</span>
                <span className="text-white font-bold text-sm tracking-wide">
                  <span aria-hidden="true">⚡</span> {template.metrics.load}
                </span>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-2.5 text-center border border-gray-700/50 flex flex-col items-center justify-center">
                <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Mobile</span>
                <span className="text-green-400 font-bold text-sm tracking-wide">
                  <span aria-hidden="true">📱</span> {template.metrics.mobile}+
                </span>
              </div>
            </div>
            
            {/* CWV Badge */}
            <div className="text-center pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-md border border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Core Web Vitals Passed
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Buttons */}
        <div className="mt-auto flex gap-3">
          <button 
            className="flex-3 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-all text-sm group"
            onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
          >
            Use Template
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-gray-300 bg-transparent border-2 border-gray-700 hover:bg-gray-800 hover:text-white transition-all text-sm"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function TemplateIntroSection() {
  const navigate = useNavigate();

  const handleViewCollection = (e) => {
    e.preventDefault();
    navigate('/templates');
    window.scrollTo(0, 0); // Ensure page starts at top
  };

  return (
    <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-bold tracking-wide">
          <span aria-hidden="true">📈</span> 90+ SEO Score
        </span>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-bold tracking-wide">
          <span aria-hidden="true">⚡</span> Fast Loading &lt;2s
        </span>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-bold tracking-wide">
          <span aria-hidden="true">📱</span> Mobile Optimized
        </span>
      </div>

      <h2 className="text-4xl font-extrabold tracking-tight text-white mb-6 sm:text-5xl lg:text-5xl leading-tight">
        20+ Pre-made Templates with <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-400">90+ Rank</span>
      </h2>
      
      <p className="text-lg sm:text-xl text-gray-400 font-medium mb-10 max-w-2xl text-center leading-relaxed">
        Choose from high-performance, SEO-optimized templates designed to rank and convert.
      </p>

      <button 
        onClick={handleViewCollection}
        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] hover:-translate-y-1 group cursor-pointer"
      >
        View Collection <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

export function Templates() {
  return (
    <section className="py-24 bg-[#0B0F1A] transition-colors duration-300 relative overflow-hidden" id="templates">
      {/* Subtle top border divider */}
      <div className="absolute top-0 inset-x-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500/20 to-transparent" />
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <TemplateIntroSection />

        <div id="template-grid-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTemplates.map((tpl) => (
            <TemplateCard key={tpl.id} template={tpl} />
          ))}
        </div>
      </div>
    </section>
  );
}
