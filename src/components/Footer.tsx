import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t ${
      darkMode ? 'bg-gray-950 border-gray-800' : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-lg"
            >
              A
            </motion.div>
            <span className="text-xl font-bold">
              <span className="gradient-text">Akash</span>
              <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>.dev</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Skills', 'Achievements', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  darkMode
                    ? 'text-gray-400 hover:text-blue-400'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {item}
              </a>
            ))}
            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                darkMode
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              <FolderOpen size={14} />
              All Projects
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Akash7367"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400'
                  : 'bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a
              href="https://leetcode.com/u/akash2211017/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
              className={`p-2.5 rounded-xl flex items-center justify-center transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400'
                  : 'bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <span className="font-bold text-[14px] leading-none">LC</span>
            </a>
            <a
              href="https://www.codechef.com/users/akashgupta7965/"
              target="_blank"
              rel="noopener noreferrer"
              title="CodeChef"
              className={`p-2.5 rounded-xl flex items-center justify-center transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400'
                  : 'bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <span className="font-bold text-[14px] leading-none">CC</span>
            </a>
            <a
              href="https://www.geeksforgeeks.org/profile/akashgupta73?tab=activity"
              target="_blank"
              rel="noopener noreferrer"
              title="GeeksforGeeks"
              className={`p-2.5 rounded-xl flex items-center justify-center transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400'
                  : 'bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <span className="font-bold text-[14px] leading-none">GFG</span>
            </a>
            <a
              href="mailto:akashgupta7965@gmail.com"
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400'
                  : 'bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Divider */}
          <div className={`w-full h-px ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <p className={`text-sm flex items-center gap-1 ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              © 2025 Akash Kumar. Made with
              <Heart size={14} className="text-red-500 fill-red-500" />
              and lots of ☕
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-xl transition-all duration-200 ${
                darkMode
                  ? 'bg-gray-800 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400'
                  : 'bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
