import { motion } from 'framer-motion';
import { Trophy, Star, Flame, Car } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

const achievements = [
  {
    title: '2nd Rank - GeekHub Hackathon',
    description: 'Secured 2nd position in the competitive GeekHub Hackathon, demonstrating strong problem-solving and development skills under time pressure.',
    icon: <Trophy size={32} />,
    color: 'from-yellow-500 to-orange-500',
    bg: 'from-yellow-500/10 to-orange-500/10',
  },
  {
    title: '1st Rank - Carrom (Sportech)',
    description: 'Won 1st place in the Carrom tournament at Sportech, showcasing strategic thinking and competitive spirit.',
    icon: <Car size={32} />,
    color: 'from-blue-500 to-cyan-500',
    bg: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    title: '380-Day LeetCode Streak',
    description: 'Maintained a 380-day consecutive streak on LeetCode and solve 600+ DSA problems on LeetCode, demonstrating consistent practice and dedication to improving coding skills.',
    icon: <Flame size={32} />,
    color: 'from-red-500 to-pink-500',
    bg: 'from-red-500/10 to-pink-500/10',
  },
  {
    title: '200-Day GeeksforGeeks Streak',
    description: 'Achieved a 200-day streak on GeeksforGeeks and solve 500+ DSA problems on GFG, showing commitment to daily learning and problem-solving in computer science.',
    icon: <Star size={32} />,
    color: 'from-green-500 to-emerald-500',
    bg: 'from-green-500/10 to-emerald-500/10',
  },
];

export default function Achievements({ darkMode }: AchievementsProps) {
  return (
    <section
      id="achievements"
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
          <span className={`text-sm font-semibold uppercase tracking-wider ${darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>
            Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
            <span className="gradient-text">Achievements</span> & Awards
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative p-6 rounded-2xl border overflow-hidden transition-all duration-300 ${darkMode
                  ? 'bg-gray-900 border-gray-800 hover:shadow-xl'
                  : 'bg-white border-gray-200 hover:shadow-xl'
                }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${achievement.color} text-white shadow-lg flex-shrink-0`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${achievement.color}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
