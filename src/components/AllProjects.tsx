import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, ArrowLeft, Search, Clock, Code2, Database, Brain, Globe, Bot, Mail, MessageSquare, Camera, MousePointer, BarChart, Gamepad2, FileText, Smartphone, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AllProjectsProps {
  darkMode: boolean;
}

interface Project {
  name: string;
  description: string;
  language: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  github?: string;
  updated: string;
  stars?: number;
  forks?: number;
  Live_Link?: string;
}

const allProjects: Project[] = [
  {
    name: 'Kaggle Competition - Titanic Prediction',
    description: 'Machine learning model for predicting Titanic survival using feature engineering, data preprocessing, and ensemble methods. Competed on Kaggle with strong accuracy scores.',
    language: 'Python',
    category: 'Machine Learning',
    icon: <Trophy size={24} />,
    color: 'from-yellow-500 to-orange-500',
    github: 'https://github.com/Akash7367/Kaggle_cometion_titanic_prediction',
    updated: '2 days ago',
  },
  {
    name: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects, skills, and achievements. Built with modern web technologies for a professional online presence.',
    language: 'HTML/CSS/JS',
    category: 'Web Development',
    icon: <Globe size={24} />,
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/Akash7367/my_portfolio',
    updated: '3 days ago',
  },
  {
    name: 'FUTURE_DS_01',
    description: 'Data science project exploring future trends and patterns through advanced analytics, statistical modeling, and data visualization techniques.',
    language: 'Jupyter Notebook',
    category: 'Data Science',
    icon: <BarChart size={24} />,
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/Akash7367/FUTURE_DS_01',
    updated: 'Last week',
  },
  {
    name: 'MLOps Task',
    description: 'MLOps implementation project demonstrating model deployment, monitoring, and CI/CD pipelines for machine learning workflows.',
    language: 'Python',
    category: 'MLOps',
    icon: <Code2 size={24} />,
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/Akash7367/mlops_task',
    updated: '2 weeks ago',
  },
  {
    name: 'AI Compliance Agent Interview',
    description: 'AI-powered compliance agent for automated interview processes. Uses LLMs and NLP for intelligent question generation and response evaluation.',
    language: 'Python',
    category: 'AI/LLM',
    icon: <Bot size={24} />,
    color: 'from-violet-500 to-purple-500',
    github: 'https://github.com/Akash7367/AI-Compliance-Agent-Interview',
    updated: '3 weeks ago',
  },
  {
    name: 'Social Media Chat',
    description: 'Social media chat application with real-time messaging features, user authentication, and interactive UI components.',
    language: 'HTML/JS',
    category: 'Web Development',
    icon: <MessageSquare size={24} />,
    color: 'from-pink-500 to-rose-500',
    github: 'https://github.com/Akash7367/Social_Media_Chat',
    updated: '3 weeks ago',
  },
  {
    name: 'Churn Rate Prediction',
    description: 'An end-to-end Machine Learning pipeline and interactive Streamlit web application that predicts telecommunications customer churn using a Random Forest Classifier.',
    language: 'Python/Stremlit',
    category: 'Machine Learning',
    icon: <MessageSquare size={24} />,
    color: 'from-pink-500 to-rose-500',
    Live_Link: 'https://futureds02-wpetekqhvjxbedmxrcen5q.streamlit.app/',
    updated: '3 weeks ago',
  },
  {
    name: 'Face Recognition System',
    description: 'Real-time face recognition system using OpenCV and deep learning. Implements facial detection, encoding, and matching for attendance tracking.',
    language: 'Python',
    category: 'Computer Vision',
    icon: <Camera size={24} />,
    color: 'from-blue-500 to-indigo-500',
    github: 'https://github.com/Akash7367/faceReco',
    updated: '3 weeks ago',
  },
  {
    name: 'Instagram Automation',
    description: 'Automated Instagram bot for scheduling posts, managing interactions, and analyzing engagement metrics using Python.',
    language: 'Python',
    category: 'Automation',
    icon: <Smartphone size={24} />,
    color: 'from-pink-500 to-purple-500',
    github: 'https://github.com/Akash7367/instagram_automation',
    updated: 'Feb 2',
  },
  {
    name: 'Virtual Mouse Controller',
    description: 'Control mouse cursor and volume using hand gestures. Built with MediaPipe for hand tracking, OpenCV for image processing, and NumPy.',
    language: 'Python',
    category: 'Computer Vision',
    icon: <MousePointer size={24} />,
    color: 'from-cyan-500 to-blue-500',
    github: 'https://github.com/Akash7367/virtual-mouse-',
    updated: 'Jan 19',
  },
  {
    name: 'Pong Game',
    description: 'Classic Pong game built with Python, featuring smooth gameplay, scoring system, and AI opponent with adjustable difficulty.',
    language: 'Python',
    category: 'Game Development',
    icon: <Gamepad2 size={24} />,
    color: 'from-green-500 to-teal-500',
    github: 'https://github.com/Akash7367/pong_game',
    updated: 'Dec 9, 2025',
  },
  {
    name: 'Automated Google Form',
    description: 'Automated form filling and data collection system using Python, streamlining repetitive form submission tasks.',
    language: 'Python',
    category: 'Automation',
    icon: <FileText size={24} />,
    color: 'from-blue-500 to-green-500',
    github: 'https://github.com/Akash7367/automated-google-form',
    updated: 'Dec 8, 2025',
  },
  {
    name: 'DOC Assistant',
    description: 'Document assistant tool powered by AI for automated document processing, summarization, and intelligent content extraction.',
    language: 'Python',
    category: 'AI/LLM',
    icon: <Bot size={24} />,
    color: 'from-indigo-500 to-violet-500',
    github: 'https://github.com/Akash7367/DOC_assistant',
    updated: 'Dec 7, 2025',
  },
  {
    name: 'AmbedkarGPT - Intern Task',
    description: 'GPT-based AI model fine-tuned for specific domain knowledge. Internship project demonstrating LLM fine-tuning and deployment.',
    language: 'Python',
    category: 'AI/LLM',
    icon: <Brain size={24} />,
    color: 'from-orange-500 to-red-500',
    github: 'https://github.com/Akash7367/AmbedkarGPT-Intern-Task',
    updated: 'Nov 19, 2025',
  },
  {
    name: 'Netflix Data Cleaning Project',
    description: 'Comprehensive data cleaning and preprocessing pipeline for Netflix dataset. Handles missing values, duplicates, and data transformation.',
    language: 'Python',
    category: 'Data Science',
    icon: <Database size={24} />,
    color: 'from-red-500 to-pink-500',
    github: 'https://github.com/Akash7367/Netflix-Data-Cleaning-Project',
    updated: 'Nov 13, 2025',
  },
  {
    name: 'Vibe Matcher - Gemini Hybrid',
    description: 'AI-powered vibe matching application using Google Gemini API with hybrid recommendation algorithms for personalized matching.',
    language: 'Jupyter Notebook',
    category: 'AI/LLM',
    icon: <Brain size={24} />,
    color: 'from-teal-500 to-cyan-500',
    github: 'https://github.com/Akash7367/vibe-matcher-gemini-hybrid',
    updated: 'Nov 10, 2025',
  },
  {
    name: 'WhatsApp Chat Analyzer',
    description: 'Comprehensive chat insights and data visualization. Analyzes messaging patterns, word frequency, activity timelines, and sentiment.',
    language: 'Python',
    category: 'Data Science',
    icon: <MessageSquare size={24} />,
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/Akash7367/Whatsapp-Chat-Analyser',
    updated: 'Jun 19, 2025',
  },
  {
    name: 'Internet Banking System',
    description: 'Full-featured banking operations system with secure authentication, transaction management, account handling, and real-time balance tracking.',
    language: 'Java',
    category: 'Backend',
    icon: <Database size={24} />,
    color: 'from-yellow-500 to-orange-500',
    github: 'https://github.com/Akash7367/Internet-Banking-System',
    updated: 'Sep 20, 2024',
  },
  {
    name: 'Email Automation',
    description: 'Automated email sending system with customizable templates, scheduling, bulk sending capabilities, and attachment handling.',
    language: 'Python',
    category: 'Automation',
    icon: <Mail size={24} />,
    color: 'from-blue-500 to-indigo-500',
    github: 'https://github.com/Akash7367/Email-Automation',
    updated: 'Sep 20, 2024',
  },
  {
    name: 'India State Game',
    description: 'Interactive quiz game about Indian states, testing knowledge of geography, capitals, and cultural facts using Python.',
    language: 'Python',
    category: 'Game Development',
    icon: <Gamepad2 size={24} />,
    color: 'from-orange-500 to-amber-500',
    github: 'https://github.com/Akash7367/india-State-Game',
    updated: 'Aug 29, 2024',
  },
  {
    name: 'Road Crossing Game',
    description: 'Classic road crossing game built with Python, featuring obstacle avoidance, scoring system, and increasing difficulty levels.',
    language: 'Python',
    category: 'Game Development',
    icon: <Gamepad2 size={24} />,
    color: 'from-red-500 to-orange-500',
    github: 'https://github.com/Akash7367/Road-Crossing-Game',
    updated: 'Aug 29, 2024',
  },
  {
    name: 'Snake Game',
    description: 'Classic Snake game implementation in Python with smooth controls, score tracking, and responsive gameplay mechanics.',
    language: 'Python',
    category: 'Game Development',
    icon: <Gamepad2 size={24} />,
    color: 'from-green-500 to-lime-500',
    github: 'https://github.com/Akash7367/Snake-game',
    updated: 'Aug 28, 2024',
  },
  {
    name: 'My First HTML Program',
    description: 'First web development project - a simple HTML page that marked the beginning of the web development journey.',
    language: 'HTML',
    category: 'Web Development',
    icon: <Code2 size={24} />,
    color: 'from-gray-500 to-gray-600',
    github: 'https://github.com/Akash7367/my-first-html-program',
    updated: 'First Project',
  },
];

const categories = ['All', 'Machine Learning', 'Data Science', 'AI/LLM', 'Computer Vision', 'Web Development', 'Automation', 'Game Development', 'Backend', 'MLOps'];

const languageColors: Record<string, string> = {
  'Python': 'bg-blue-500',
  'Jupyter Notebook': 'bg-orange-500',
  'HTML/CSS/JS': 'bg-yellow-500',
  'HTML/JS': 'bg-yellow-500',
  'HTML': 'bg-orange-400',
  'Java': 'bg-red-500',
};

export default function AllProjects({ darkMode }: AllProjectsProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.language.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <div className={`sticky top-0 z-50 backdrop-blur-xl border-b ${darkMode ? 'bg-gray-950/90 border-gray-800' : 'bg-white/90 border-gray-200'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
                }`}
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Akash7367"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            A complete collection of {allProjects.length}+ projects spanning AI/ML, Data Science, Web Development, Automation, and more.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Total Projects', value: allProjects.length.toString(), icon: <Code2 size={20} /> },
            { label: 'Python Projects', value: allProjects.filter(p => p.language === 'Python').length.toString(), icon: <Brain size={20} /> },
            { label: 'AI/ML Projects', value: allProjects.filter(p => ['AI/LLM', 'Machine Learning', 'Computer Vision'].includes(p.category)).length.toString(), icon: <Bot size={20} /> },
            { label: 'Categories', value: (categories.length - 1).toString(), icon: <Database size={20} /> },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`p-4 rounded-2xl border text-center ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                }`}
            >
              <div className={`inline-flex p-2 rounded-lg mb-2 ${darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                }`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-black gradient-text">{stat.value}</div>
              <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={20} />
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 rounded-2xl border text-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${darkMode
                  ? 'bg-gray-900 border-gray-800 text-white placeholder-gray-500'
                  : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                }`}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : darkMode
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                      : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 border border-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mb-6 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}
        >
          Showing {filteredProjects.length} of {allProjects.length} projects
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${darkMode
                  ? 'bg-gray-900 border-gray-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10'
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl'
                }`}
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                    {project.icon}
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
                    }`}>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                  {project.name}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                  {project.description}
                </p>

                {/* Language & Meta */}
                <div className={`flex items-center gap-3 text-xs mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                  <span className="flex items-center gap-1.5">
                    <span className={`w-3 h-3 rounded-full ${languageColors[project.language] || 'bg-gray-500'}`} />
                    {project.language}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {project.updated}
                  </span>
                </div>

                {/* Project Link */}
                <a
                  href={project.github || project.Live_Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ${darkMode
                      ? 'text-gray-400 hover:text-blue-400'
                      : 'text-gray-500 hover:text-blue-600'
                    }`}
                >
                  {project.github ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  ) : (
                    <Globe size={16} />
                  )}
                  {project.github ? 'View on GitHub' : 'Live Link'}
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${project.color}`} />
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
              Try adjusting your search or filter criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
