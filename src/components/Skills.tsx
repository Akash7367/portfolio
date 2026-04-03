import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillsProps {
  darkMode: boolean;
}

const skillCategories = [
  {
    category: 'Programming',
    icon: '💻',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 80 },
      { name: 'C/C++', level: 75 },
      { name: 'R', level: 70 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    category: 'Data Science',
    icon: '📊',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 90 },
      { name: 'Matplotlib', level: 85 },
      { name: 'Seaborn', level: 85 },
      { name: 'EDA', level: 92 },
    ],
  },
  {
    category: 'Machine Learning',
    icon: '🧠',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Scikit-learn', level: 90 },
      { name: 'Model Building', level: 88 },
      { name: 'Hyperparameter Tuning', level: 85 },
      { name: 'Feature Engineering', level: 87 },
    ],
  },
  {
    category: 'Deep Learning',
    icon: '🔥',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'TensorFlow', level: 85 },
      { name: 'Keras', level: 85 },
      { name: 'ANN/CNN/RNN', level: 82 },
      { name: 'LSTM', level: 80 },
      { name: 'Transfer Learning', level: 78 },
    ],
  },
  {
    category: 'Computer Vision',
    icon: '👁️',
    color: 'from-teal-500 to-blue-500',
    skills: [
      { name: 'OpenCV', level: 88 },
      { name: 'YOLOv8', level: 80 },
      { name: 'MediaPipe', level: 82 },
    ],
  },
  {
    category: 'NLP & LLMs',
    icon: '🗣️',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Transformers', level: 82 },
      { name: 'HuggingFace', level: 80 },
      { name: 'LangChain', level: 78 },
      { name: 'RAG', level: 75 },
      { name: 'Prompt Engineering', level: 85 },
    ],
  },
  {
    category: 'Web & Backend',
    icon: '🌐',
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Flask', level: 80 },
      { name: 'FastAPI', level: 78 },
      { name: 'Streamlit', level: 85 },
      { name: 'HTML/CSS', level: 75 },
    ],
  },
  {
    category: 'Tools & Databases',
    icon: '🛠️',
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'FAISS/ChromaDB', level: 78 },
    ],
  },
];

export default function Skills({ darkMode }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="skills"
      className={`section-padding ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`text-sm font-semibold uppercase tracking-wider ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(i)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === i
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : darkMode
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                    : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 border border-gray-200'
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-gray-900 border-gray-800 hover:border-blue-500/30'
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold">{skill.name}</span>
                <span className={`text-sm font-mono ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {skill.level}%
                </span>
              </div>
              <div className={`w-full h-2.5 rounded-full overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                  className={`h-full rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h3 className={`text-center text-lg font-semibold mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Complete Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'Java', 'C/C++', 'R', 'SQL', 'Pandas', 'NumPy',
              'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'Keras',
              'OpenCV', 'YOLOv8', 'MediaPipe', 'Transformers', 'HuggingFace',
              'LangChain', 'Flask', 'FastAPI', 'Streamlit', 'Git', 'Docker',
              'MySQL', 'PostgreSQL', 'FAISS', 'ChromaDB', 'Pinecone',
              'HTML', 'CSS', 'CI/CD', 'RAG', 'Prompt Engineering'
            ].map((tech, i) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, y: -3 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium cursor-default transition-all duration-200 ${
                  darkMode
                    ? 'bg-gray-800/80 text-gray-300 border border-gray-700/50 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
