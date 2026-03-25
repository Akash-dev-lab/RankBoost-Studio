import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Templates } from '../components/sections/Templates';
import { CTA } from '../components/sections/CTA';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Templates />
      <CTA />
    </div>
  );
}
