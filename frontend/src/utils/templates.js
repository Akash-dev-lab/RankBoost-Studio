import { categories } from '../data/categories';

export { categories };

export const templates = [
  // Gym
  {
    id: 'gym-1',
    category: 'gym',
    name: 'Iron Pulse Fitness',
    tag: 'Local Business',
    type: '3D',
    price: 'Premium',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    metrics: { perf: 98, seo: 100, load: '1.2s', mobile: 99, cwv: 'Passed' }
  },
  {
    id: 'gym-2',
    category: 'gym',
    name: 'Zen Yoga Studio',
    tag: 'Premium',
    type: '2D',
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    metrics: { perf: 95, seo: 98, load: '1.5s', mobile: 95, cwv: 'Passed' }
  },
  {
    id: 'gym-3',
    category: 'gym',
    name: 'CrossFit Core',
    tag: 'Local Business',
    type: '2D',
    price: 'Premium',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    metrics: { perf: 99, seo: 100, load: '0.9s', mobile: 100, cwv: 'Passed' }
  },
  // Salon
  {
    id: 'salon-1',
    category: 'salon',
    name: 'Glow Beauty Bar',
    tag: 'Premium Beauty',
    type: '2D',
    price: 'Premium',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    metrics: { perf: 96, seo: 99, load: '1.4s', mobile: 96, cwv: 'Passed' }
  },
  // Healthcare
  {
    id: 'med-1',
    category: 'healthcare',
    name: 'HealthBridge Medical',
    tag: 'Healthcare',
    type: '2D',
    price: 'Premium',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    metrics: { perf: 97, seo: 100, load: '1.1s', mobile: 98, cwv: 'Passed' }
  },
  // Restaurant
  {
    id: 'rest-1',
    category: 'restaurant',
    name: 'The Urban Bistro',
    tag: 'Dining',
    type: '2D',
    price: 'Premium',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    metrics: { perf: 94, seo: 98, load: '1.6s', mobile: 93, cwv: 'Passed' }
  },
  // Real Estate
  {
    id: 're-1',
    category: 'real-estate',
    name: 'Skyline Properties',
    tag: 'Real Estate',
    type: '3D',
    price: 'Premium',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    metrics: { perf: 98, seo: 100, load: '1.3s', mobile: 97, cwv: 'Passed' }
  },
  // Education
  {
    id: 'edu-1',
    category: 'education',
    name: 'Bright Minds Academy',
    tag: 'Education',
    type: '2D',
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=800&auto=format&fit=crop',
    metrics: { perf: 95, seo: 98, load: '1.5s', mobile: 94, cwv: 'Passed' }
  }
];

// Runtime Validation
const validCategorySlugs = new Set(categories.map(c => c.slug));
templates.forEach(t => {
  if (!validCategorySlugs.has(t.category)) {
    console.warn(`[templates.js] Template ID '${t.id}' has an invalid category slug: '${t.category}'`);
  }
});
