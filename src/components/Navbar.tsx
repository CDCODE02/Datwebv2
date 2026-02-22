import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'TOKENOMICS', href: '#tokenomics' },
    { name: 'ROADMAP', href: '#roadmap' },
    { name: 'SOCIALS', href: '#social' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    setTimeout(() => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neon-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-neon-green rounded-full flex items-center justify-center overflow-hidden border border-black">
              <img src="https://i.ibb.co/SwcBcQ8d/PNG-01.png" alt="Dat Boi Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-3xl text-black tracking-wider">
              $DATBOI
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-mono text-sm text-black hover:text-neon-green transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="https://t.me/Datboicoin_eth"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neon-green text-black font-bold py-2 px-6 rounded-full hover:bg-white hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              JOIN COMMUNITY <ExternalLink size={16} />
            </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-neon-green focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neon-green/20 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-black hover:text-neon-green hover:bg-gray-50 block px-3 py-4 rounded-md text-lg font-bold font-mono border-b border-gray-100 last:border-0 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://t.me/Datboicoin_eth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black bg-neon-green block px-3 py-4 rounded-md text-lg font-bold mt-4 text-center hover:bg-neon-green/80 transition-colors"
              >
                JOIN COMMUNITY
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
