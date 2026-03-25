import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { Layout } from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const TemplatePage = lazy(() => import('./pages/Template'));
const ContactPage = lazy(() => import('./pages/Contact'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    {/* <div className="w-8 h-8 rounded-full border-4 border-indigo-200 border-t-indigo-600 animate-spin"></div> */}
    <p>Loading...</p>
  </div>
);

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="template/:type" element={<TemplatePage />} />
              <Route path="contact" element={<ContactPage />} />
              {/* Fallback route */}
              <Route path="*" element={<TemplatePage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;