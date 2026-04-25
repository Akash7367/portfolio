import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Suvidha Foundation (Suvidha Mahila Mandal)',
    period: 'Apr 2026 – Present',
    location: 'Remote',
    description: [
      'Applying advanced data science techniques to analyze organizational data and provide actionable insights.',
      'Developing and optimizing machine learning models to improve operational efficiency.',
      'Collaborating with cross-functional teams to implement data-driven solutions.'
    ],
    color: 'from-blue-500 to-indigo-500',
    icon: <Briefcase size={24} />
  },
  {
    role: 'Data Science & Analytics Intern',
    company: 'Future Interns',
    period: 'Mar 2026 – Apr 2026',
    location: 'Remote',
    description: [
      'Built an interactive Business Sales Performance Dashboard using Python, Pandas, and Streamlit for 38MB+ retail data.',
      'Implemented a customer churn prediction model using Random Forest with 90%+ accuracy.',
      'Created automated data cleaning pipelines and performed extensive exploratory data analysis (EDA).'
    ],
    color: 'from-purple-500 to-pink-500',
    icon: <Briefcase size={24} />
  }
];

export default function Experience({ darkMode }: ExperienceProps) {
  return (
    <section
      id="experience"
      className={`section-padding ${darkMode ? 'bg-gray-900/30' : 'bg-gray-50/50'}`}
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
            Professional Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {/* Vertical Line */}
          <div className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-200'
          } -translate-x-1/2 hidden md:block`} />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full border-4 ${
                darkMode ? 'bg-gray-900 border-blue-500' : 'bg-white border-blue-500'
              } -translate-x-1/2 z-10 hidden md:block`} />

              {/* Content Card */}
              <div className={`w-full md:w-1/2 p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                darkMode
                  ? 'bg-gray-900 border-gray-800 hover:border-blue-500/30'
                  : 'bg-white border-gray-200 hover:border-blue-300'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} text-white shadow-lg`}>
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className={`text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className={`flex flex-wrap gap-4 text-xs mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-r ${exp.color}`} />
                      <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spacer for timeline alignment */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
