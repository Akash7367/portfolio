import { motion } from 'framer-motion';
import { GraduationCap, Target, Award, Heart } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const stats = [
  { number: '22+', label: 'Projects', icon: <Target size={24} /> },
  { number: '10+', label: 'Technologies', icon: <Heart size={24} /> },
  { number: '4', label: 'Achievements', icon: <Award size={24} /> },
  { number: '600+', label: 'LeetCode DSA Problems', icon: <GraduationCap size={24} /> },
];

export default function About({ darkMode }: AboutProps) {
  return (
    <section
      id="about"
      className={`section-padding ${darkMode ? 'bg-gray-900/50' : 'bg-white'}`}
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
            Get to Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className={`p-8 rounded-3xl border ${
              darkMode
                ? 'bg-gray-900 border-gray-800'
                : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="space-y-8 text-left">
                {/* About & Objective */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 flex-shrink-0 mt-1">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">About Me</h3>
                    <p className={`leading-relaxed mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      I am a highly motivated aspiring AI Engineer and Data Scientist with a strong foundation in Machine Learning, Deep Learning, and Computer Vision. I am deeply passionate about building intelligent systems that solve real-world problems. From developing real-time face recognition systems to building interactive ML pipelines and automation bots, I love analyzing data to create actionable intelligence.
                    </p>
                    <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      I am actively seeking entry-level roles and internships in Data Science, Machine Learning, and AI Engineering where I can contribute to innovative projects and continue to grow as a developer.
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 flex-shrink-0 mt-1">
                    <GraduationCap size={24} />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                    
                    <div className={`relative pl-4 border-l-2 space-y-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                      <div className="relative">
                        <div className={`absolute -left-[21px] top-1.5 w-2 h-2 rounded-full ring-4 ${darkMode ? 'bg-blue-400 ring-gray-900 border border-gray-900' : 'bg-blue-500 ring-white border border-white'}`} />
                        <h4 className={`font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>B.Tech in Artificial Intelligence & Machine Learning</h4>
                        <p className={`text-sm mt-1 mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>8th Semester, Class of 2026</p>
                        <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-md ${darkMode ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600'}`}>CGPA: 8.13/10</span>
                      </div>

                      <div className="relative">
                        <div className={`absolute -left-[21px] top-1.5 w-2 h-2 rounded-full ring-4 ${darkMode ? 'bg-gray-600 ring-gray-900 border border-gray-900' : 'bg-gray-400 ring-white border border-white'}`} />
                        <h4 className={`font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Class 12th (Senior Secondary)</h4>
                        <p className={`text-sm mt-1 mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>B.B.N.COLLEGE, BATHUA BAZAR, GOPALGANJ</p>
                        <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-md ${darkMode ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600'}`}>Score: 78.8%</span>
                      </div>

                      <div className="relative">
                        <div className={`absolute -left-[21px] top-1.5 w-2 h-2 rounded-full ring-4 ${darkMode ? 'bg-gray-600 ring-gray-900 border border-gray-900' : 'bg-gray-400 ring-white border border-white'}`} />
                        <h4 className={`font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Class 10th (Secondary)</h4>
                        <p className={`text-sm mt-1 mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>50446-S M ACADEMY MAHUWA PANCHDEORI GOPALGANJ BR</p>
                        <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-md ${darkMode ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600'}`}>Score: 81%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 flex-shrink-0 mt-1">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Focus Areas & Interests</h3>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <strong className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Data Science:</strong> Predictive Modeling, Statistical Analysis, and extracting actionable insights from complex datasets.<br className="mb-1" />
                      <strong className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Machine Learning:</strong> Supervised & Unsupervised Learning, Feature Engineering, and Model Optimization.<br className="mb-1" />
                      <strong className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Artificial Intelligence:</strong> Deep Learning, Computer Vision, Natural Language Processing (LLMs & RAG), and building end-to-end AI applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-5 rounded-2xl text-center border transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-900 border-gray-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10'
                      : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`inline-flex p-2 rounded-xl mb-2 ${
                    darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black gradient-text">{stat.number}</div>
                  <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
