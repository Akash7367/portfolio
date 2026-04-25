import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';
import BackgroundLayer from './components/BackgroundLayer';

function HomePage({ darkMode }: { darkMode: boolean }) {
  return (
    <>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Experience darkMode={darkMode} />
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

  return (
    <Router>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
          <BackgroundLayer darkMode={darkMode} />
          <div className="relative z-10">
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
      </div>
    </Router>
  );
}

export default App;
