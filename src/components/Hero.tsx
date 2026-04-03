import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Code2, Brain, Database, Terminal } from 'lucide-react';
import ProfileImage from './ProfileImage';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gray-950' : 'bg-gray-50'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1.5s' }}
        />
        
        {/* Grid pattern */}
        <div
          className={`absolute inset-0 ${darkMode ? 'opacity-5' : 'opacity-10'}`}
          style={{
            backgroundImage: `linear-gradient(${darkMode ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.2)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.2)'} 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                darkMode
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  : 'bg-blue-50 text-blue-600 border border-blue-200'
              }`}>
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Open to Work
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Akash</span>
              <br />
              <span className={`text-3xl sm:text-4xl lg:text-5xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Kumar
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold mb-4 gradient-text-alt"
            >
              Aspiring AI Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              Turning Data into Intelligence. Final-year B.Tech student passionate about building 
              AI-powered solutions that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold text-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <Code2 className="mr-2" size={20} />
                View Projects
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/12LLJMFJCiNuTOZrlK0GmokbilSw5hyMp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:-translate-y-1 border-2 ${
                  darkMode
                    ? 'border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10'
                    : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg'
                }`}
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: <Terminal size={20} />, label: 'Python' },
                { icon: <Brain size={20} />, label: 'ML/DL' },
                { icon: <Database size={20} />, label: 'SQL' },
                { icon: <Code2 size={20} />, label: 'React' },
              ].map((tech, i) => (
                <motion.div
                  key={tech.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-200 ${
                    darkMode
                      ? 'text-gray-500 hover:text-blue-400 hover:bg-blue-500/10'
                      : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  {tech.icon}
                  <span className="text-xs">{tech.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-40 animate-pulse" />
              
              {/* Profile photo container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl profile-glow">
                <div className={`w-full h-full rounded-full overflow-hidden ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                }`}>
                  <ProfileImage
                    alt="Akash Kumar - AI & ML Engineer"
                    className="w-full h-full"
                    imageClassName="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              {[
                { text: '🐍 Python', top: '5%', left: '-10%', delay: 0 },
                { text: '🧠 ML', top: '15%', right: '-15%', delay: 0.2 },
                { text: '🔥 TensorFlow', bottom: '15%', left: '-15%', delay: 0.4 },
                { text: '📊 Data Science', bottom: '5%', right: '-10%', delay: 0.6 },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  className={`absolute px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg ${
                    darkMode
                      ? 'bg-gray-800 text-gray-200 border border-gray-700'
                      : 'bg-white text-gray-700 border border-gray-200'
                  }`}
                  style={{
                    top: badge.top,
                    left: badge.left,
                    right: badge.right,
                    bottom: badge.bottom,
                  }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: badge.delay }}
                >
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2">
            <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className={darkMode ? 'text-gray-500' : 'text-gray-400'} size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
