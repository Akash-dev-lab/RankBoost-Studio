import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/Button';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = React.useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'Templates', path: '/#templates' },
    { name: 'Contact', path: '/contact' },
  ], []);

  const toggleMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Global smooth scroll effect when routing natively
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]); // Listen to hash and pathname changes

  const handleNavClick = (e, path) => {
    closeMobileMenu();

    const [targetPathname, hash] = path.split('#');
    const targetPath = targetPathname || '/';

    // If already on the page, manually take over the scroll logic
    if (location.pathname === targetPath) {
      e.preventDefault();
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', path);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.replaceState(null, '', path);
      }
    }
  };

  const currentPath = `${location.pathname}${location.hash}`;

  const desktopNavLinkClass = React.useCallback(
    (path) =>
      `text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
        (currentPath === path || (path === '/' && currentPath === ''))
          ? 'text-indigo-600 dark:text-indigo-400'
          : 'text-gray-600 dark:text-gray-300'
      }`,
    [currentPath]
  );

  const mobileNavLinkClass = React.useCallback(
    (path) =>
      `text-base font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
        (currentPath === path || (path === '/' && currentPath === ''))
          ? 'text-indigo-600 dark:text-indigo-400'
          : 'text-gray-600 dark:text-gray-300'
      }`,
    [currentPath]
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <NavLink to="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-xl">
                R
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                RankBoost
              </span>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={() => desktopNavLinkClass(link.path)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button 
              className="hidden md:inline-flex rounded-full shadow-md hover:shadow-lg transition-all" 
              variant="primary"
              onClick={() => window.dispatchEvent(new CustomEvent('open-demo-modal'))}
            >
              Get Free Demo
            </Button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-4 shadow-lg transition-colors duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={() => mobileNavLinkClass(link.path)}
              >
                {link.name}
              </NavLink>
            ))}
            <Button 
              className="w-full mt-4 rounded-full shadow-md hover:shadow-lg transition-all" 
              variant="primary"
              onClick={() => {
                closeMobileMenu();
                window.dispatchEvent(new CustomEvent('open-demo-modal'));
              }}
            >
              Get Free Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
