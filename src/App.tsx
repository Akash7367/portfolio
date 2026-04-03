import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';

function HomePage({ darkMode }: { darkMode: boolean }) {
  return (
    <>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Achievements darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            Loading Portfolio...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <HomePage darkMode={darkMode} />
              </>
            } />
            <Route path="/projects" element={
              <>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <AllProjects darkMode={darkMode} />
                <Footer darkMode={darkMode} />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
