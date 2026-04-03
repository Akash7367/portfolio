import { motion } from 'framer-motion';
import { ExternalLink, Code2, MessageSquare, Camera, MousePointer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectsProps {
  darkMode: boolean;
}

const featuredProjects = [
  {
    title: 'Face Recognition Attendance System',
    description: 'Built using OpenCV and ML techniques for real-time attendance tracking. Implements facial detection, recognition, and automated logging of attendance records.',
    tech: ['OpenCV', 'Python', 'Machine Learning', 'NumPy'],
    icon: <Camera size={28} />,
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/Akash7367/faceReco',
    category: 'Computer Vision',
  },
  {
    title: 'Virtual Mouse Controller',
    description: 'Controlled mouse cursor and volume using hand gestures. Built with MediaPipe for hand tracking, OpenCV for image processing, and NumPy for coordinate mapping.',
    tech: ['MediaPipe', 'OpenCV', 'NumPy', 'Python'],
    icon: <MousePointer size={28} />,
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/Akash7367/virtual-mouse-',
    category: 'Computer Vision',
  },
  {
    title: 'WhatsApp Chat Analyzer',
    description: 'Performed comprehensive chat insights and data visualization. Analyzed messaging patterns, word frequency, activity timelines, and sentiment from WhatsApp export data.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    icon: <MessageSquare size={28} />,
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/Akash7367/Whatsapp-Chat-Analyser',
    category: 'Data Science',
  },
];

export default function Projects({ darkMode }: ProjectsProps) {
  return (
    <section
      id="projects"
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
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            A showcase of my best projects that demonstrate my skills in AI, ML, Data Science, and Software Development.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`block group relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-900 border-gray-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10'
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl'
              }`}
            >
              {/* Card Header */}
              <div className={`p-6 pb-0`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                    {project.icon}
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    darkMode
                      ? 'bg-gray-800 text-gray-400'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                        darkMode
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : 'bg-blue-50 text-blue-600 border border-blue-100'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className={`px-6 py-4 border-t ${
                darkMode ? 'border-gray-800' : 'border-gray-100'
              }`}>
                <div className="flex items-center justify-between">
                  <div
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
                      darkMode
                        ? 'text-gray-400 group-hover:text-blue-400'
                        : 'text-gray-500 group-hover:text-blue-600'
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    View Code
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`text-sm font-medium ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  >
                    <ExternalLink size={16} />
                  </motion.div>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${project.color}`} />
            </motion.a>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:-translate-y-1 border-2 ${
              darkMode
                ? 'border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10'
                : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg'
            }`}
          >
            <Code2 size={20} />
            View All Projects (22+)
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
