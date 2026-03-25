import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { categories } from '../utils/templates';

function CategoryCard({ category }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => {
        navigate(`/templates/${category.slug}`);
        window.scrollTo(0, 0);
      }}
      className="group relative flex flex-col bg-[#121826] rounded-2xl overflow-hidden border border-indigo-500/10 hover:border-indigo-500/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-[0_20px_50px_rgba(79,70,229,0.2)]"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors duration-500" />
      
      <div className="relative aspect-16/10 overflow-hidden bg-[#0B0F1A]">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#121826] via-transparent to-transparent opacity-80" />
      </div>

      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {category.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {category.description}
        </p>
        <div className="flex items-center text-indigo-400 font-bold text-sm group-hover:gap-2 transition-all">
          Explore Templates <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}

const TemplatesHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0F1A] pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Choose Your <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-400">Business Model</span>
          </h1>
          <p className="text-xl text-gray-400">
            Select a category to browse high-performance templates tailored for your industry.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatesHome;
