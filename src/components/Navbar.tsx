import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Mail, FolderOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-gray-800/50'
            : 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-lg shadow-lg"
            >
              A
            </motion.div>
            <span className="hidden sm:block text-xl font-bold">
              <span className="gradient-text">Akash</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>.dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {isHomePage ? (
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-500/10 hover:text-blue-400 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </a>
              ))
            ) : (
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-500/10 hover:text-blue-400 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
            )}
            {!isHomePage && (
              <Link
                to="/projects"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-blue-500/10 text-blue-400`}
              >
                <span className="flex items-center gap-1.5">
                  <FolderOpen size={14} />
                  All Projects
                </span>
              </Link>
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            {/* Social Links */}
            <div className="hidden sm:flex items-center space-x-2">
              <a
                href="https://github.com/Akash7367"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all duration-200 hover:bg-blue-500/10 ${
                  darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a
                href="https://leetcode.com/u/akash2211017/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode"
                className={`p-2 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-blue-500/10 ${
                  darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                <span className="font-bold text-[13px] leading-none">LC</span>
              </a>
              <a
                href="https://www.codechef.com/users/akashgupta7965/"
                target="_blank"
                rel="noopener noreferrer"
                title="CodeChef"
                className={`p-2 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-blue-500/10 ${
                  darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                <span className="font-bold text-[13px] leading-none">CC</span>
              </a>
              <a
                href="https://www.geeksforgeeks.org/profile/akashgupta73?tab=activity"
                target="_blank"
                rel="noopener noreferrer"
                title="GeeksforGeeks"
                className={`p-2 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-blue-500/10 ${
                  darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                <span className="font-bold text-[13px] leading-none">GFG</span>
              </a>
              <a
                href="mailto:akashgupta7965@gmail.com"
                className={`p-2 rounded-lg transition-all duration-200 hover:bg-blue-500/10 ${
                  darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Dark/Light Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2.5 rounded-xl transition-all duration-200 ${
                darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t ${
              darkMode ? 'bg-gray-950/95 border-gray-800' : 'bg-white/95 border-gray-200'
            } backdrop-blur-xl`}
          >
            <div className="px-4 py-4 space-y-1">
              {isHomePage ? (
                navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      darkMode
                        ? 'text-gray-300 hover:bg-blue-500/10 hover:text-blue-400'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </a>
                ))
              ) : (
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    darkMode
                      ? 'text-gray-300 hover:bg-blue-500/10 hover:text-blue-400'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  Home
                </Link>
              )}
              <Link
                to="/projects"
                onClick={handleNavClick}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  darkMode
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-blue-600 bg-blue-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FolderOpen size={16} />
                  All Projects (22+)
                </span>
              </Link>
              <div className="flex items-center space-x-3 pt-3 px-4">
                <a
                  href="https://github.com/Akash7367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a
                  href="https://leetcode.com/u/akash2211017/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LeetCode"
                  className={`p-2 rounded-lg flex items-center justify-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  <span className="font-bold text-[14px] leading-none">LC</span>
                </a>
                <a
                  href="https://www.codechef.com/users/akashgupta7965/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="CodeChef"
                  className={`p-2 rounded-lg flex items-center justify-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  <span className="font-bold text-[14px] leading-none">CC</span>
                </a>
                <a
                  href="https://www.geeksforgeeks.org/profile/akashgupta73?tab=activity"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GeeksforGeeks"
                  className={`p-2 rounded-lg flex items-center justify-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  <span className="font-bold text-[14px] leading-none">GFG</span>
                </a>
                <a
                  href="mailto:akashgupta7965@gmail.com"
                  className={`p-2 rounded-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
