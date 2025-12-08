import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Programs', href: '#programs' },
  { name: 'Impact', href: '#impact' },
  { name: 'Community', href: '#community' },
  { name: 'Events', href: 'https://luma.com/user/ndz' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#12161E]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex md:grid md:grid-cols-3 items-center justify-between md:justify-items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 z-50 md:justify-self-start">
            <img src="/logo.png" alt="NDZ Hub" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#EEEEED] hover:text-[#04E998] transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center md:justify-self-end">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTWSMRpKKdp6sAQ2rOxw1qRSZchQ52cdBHo1TIVkMTHCWwzA/viewform" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-[#04E998] text-[#12161E] font-bold rounded-full hover:bg-[#04E998]/90 transition-colors">
              Join NDZ Hub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-[#12161E] md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#EEEEED] hover:text-[#04E998] transition-colors text-xl font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-4 pt-6 border-t border-[#5C677A]">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTWSMRpKKdp6sAQ2rOxw1qRSZchQ52cdBHo1TIVkMTHCWwzA/viewform" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-[#04E998] text-[#12161E] font-bold rounded-full text-center hover:bg-[#04E998]/90 transition-colors">
                  Join NDZ Hub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
