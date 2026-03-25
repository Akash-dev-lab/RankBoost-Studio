import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, ExternalLink, Filter } from 'lucide-react';
import { templates, categories } from '../utils/templates';

function TemplateCard({ template }) {
  const [showMetrics, setShowMetrics] = useState(false);

  return (
    <div className="group relative flex flex-col bg-white dark:bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgb(79,70,229,0.15)]">
      <div className="absolute top-4 right-4 z-20">
        <span className="px-2 py-1 text-[10px] font-bold text-white bg-indigo-600/80 backdrop-blur-md rounded-md border border-indigo-400/30">
          {template.price}
        </span>
      </div>

      <div className="relative aspect-16/10 overflow-hidden bg-gray-100 dark:bg-[#0B0F1A]">
        <img 
          src={template.image} 
          alt={template.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white dark:from-[#121826] via-transparent to-transparent opacity-90" />
      </div>

      <div className="flex flex-col flex-1 p-6 relative z-10">
        <div className="mb-5 flex flex-col items-start min-h-20">
          <div className="flex gap-2 mb-3">
            <span className="inline-flex px-3 py-1 text-[11px] font-bold tracking-wide text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20 uppercase">
              {template.tag}
            </span>
            <span className="inline-flex px-3 py-1 text-[11px] font-bold tracking-wide text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20 uppercase">
              {template.type}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
            {template.name}
          </h3>
        </div>

        <button 
          onClick={() => setShowMetrics(!showMetrics)}
          className="flex items-center justify-between w-full py-3 px-4 bg-gray-50 dark:bg-[#0B0F1A] rounded-xl border border-gray-200 dark:border-gray-800 hover:border-indigo-500/30 transition-colors text-gray-600 dark:text-gray-300 text-sm font-semibold mb-5 focus:outline-none"
        >
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="text-base">⚡</span> View Performance
          </span>
          {showMetrics ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${showMetrics ? 'max-h-72 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
        >
          <div className="p-5 bg-linear-to-b from-gray-50 to-white dark:from-[#0B0F1A] dark:to-[#0d121c] rounded-xl border border-gray-200 dark:border-gray-800/80 space-y-4 shadow-inner">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">🚀 Performance</span>
                <span class="text-green-400 font-bold">{template.metrics.perf}+</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-green-400 h-full rounded-full" style={{ width: showMetrics ? `${template.metrics.perf}%` : '0%' }}></div>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">🔍 SEO Score</span>
                <span class="text-green-400 font-bold">{template.metrics.seo}+</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                <div className="bg-green-400 h-full rounded-full" style={{ width: showMetrics ? `${template.metrics.seo}%` : '0%' }}></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-white dark:bg-gray-800/30 rounded-lg p-2.5 text-center border border-gray-200 dark:border-gray-700/50">
                <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Load Time</span>
                <span className="text-gray-900 dark:text-white font-bold text-sm tracking-wide">⚡ {template.metrics.load}</span>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-2.5 text-center border border-gray-700/50">
                <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Mobile</span>
                <span className="text-green-400 font-bold text-sm tracking-wide">📱 {template.metrics.mobile}+</span>
              </div>
            </div>
            
            <div className="text-center pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-md border border-emerald-400/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Passed
              </span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex gap-3">
          <button 
            className="flex-3 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all text-sm group"
            onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
          >
            Use Template
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-gray-600 dark:text-gray-300 bg-transparent border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all text-sm">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

const CategoryPage = () => {
  const { category: categorySlug } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const categoryInfo = useMemo(() => {
    return categories.find(c => c.slug === categorySlug);
  }, [categorySlug]);

  const filteredTemplates = useMemo(() => {
    if (!categorySlug) return [];
    const list = templates.filter(t => t.category === categorySlug);
    if (activeFilter === 'All') return list;
    if (activeFilter === '2D') return list.filter(t => t.type === '2D');
    if (activeFilter === '3D') return list.filter(t => t.type === '3D');
    if (activeFilter === 'Premium') return list.filter(t => t.price === 'Premium');
    if (activeFilter === 'Free') return list.filter(t => t.price === 'Free');
    if (activeFilter === 'Fastest') return list.filter(t => parseInt(t.metrics.perf) >= 98);
    return list;
  }, [categorySlug, activeFilter]);

  if (!categoryInfo) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0B0F1A] flex flex-col items-center justify-center text-gray-900 dark:text-white px-4 text-center">
        <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mb-6 border border-indigo-500/20">
          <Filter className="w-10 h-10 text-indigo-400" />
        </div>
        <h1 className="text-4xl font-extrabold mb-4">Category Not Found</h1>
        <p className="text-gray-400 max-w-md mb-10 text-lg">
          The category you're looking for doesn't exist or has been moved.
        </p>
        <button 
          onClick={() => navigate('/templates')} 
          className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-full shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-1"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Templates
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F1A] pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <button 
            onClick={() => navigate('/templates')}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> All Categories
          </button>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-bold">
              ⚡ 90+ Performance
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-bold">
              🔍 95+ SEO Score
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-bold">
              📱 Mobile First
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            {categoryInfo.name} <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-400">Templates</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            High-performance designs optimized for 90+ SEO score.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 mr-4 text-gray-400 text-sm font-bold">
            <Filter className="w-4 h-4" /> Filter:
          </div>
          {['All', '2D', '3D', 'Fastest', 'Premium', 'Free'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeFilter === filter 
                ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)]' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((tpl) => (
            <TemplateCard key={tpl.id} template={tpl} />
          ))}
          {filteredTemplates.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-500 text-lg">No templates found for this filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
