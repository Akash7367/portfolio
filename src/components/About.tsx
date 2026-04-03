import { motion } from 'framer-motion';
import { GraduationCap, Target, Award, Heart } from 'lucide-react';
import ProfileImage from './ProfileImage';

interface AboutProps {
  darkMode: boolean;
}

const stats = [
  { number: '22+', label: 'Projects', icon: <Target size={24} /> },
  { number: '10+', label: 'Technologies', icon: <Heart size={24} /> },
  { number: '4', label: 'Achievements', icon: <Award size={24} /> },
  { number: '200+', label: 'LeetCode Days', icon: <GraduationCap size={24} /> },
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
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Education</h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      B.Tech in Artificial Intelligence & Machine Learning
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      Final Year, Class of 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 flex-shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Objective</h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Seeking entry-level roles and internships in Data Science, Machine Learning, 
                      and AI Engineering where I can apply my technical skills and passion for 
                      building intelligent systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 flex-shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Interests</h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Deep Learning, Computer Vision, NLP, LLMs, RAG Systems, 
                      and building end-to-end AI applications.
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
