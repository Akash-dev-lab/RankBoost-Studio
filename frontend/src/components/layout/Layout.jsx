import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { DemoModal } from '../ui/DemoModal';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col font-sans relative">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <DemoModal />
    </div>
  );
}
