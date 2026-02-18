import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award, Medal, Users2 } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: <Trophy size={32} />,
      title: 'Kaggle Competition Rankings',
      items: [
        'Top 2.4% (39/1600) - Digit Recognition Challenge',
        'Top 11.3% (269/2390) - Insurance Regression Challenge',
        'Top 23.8% (3800/16000) - Titanic Challenge',
      ],
    },
    {
      icon: <Medal size={32} />,
      title: 'Data Science Competitions',
      items: [
        '3rd Place out of 20 teams - University Datathon',
        '4th Place out of 35 teams - University Datathon',
      ],
    },
    {
      icon: <Award size={32} />,
      title: 'Open Source Contribution',
      items: [
        "Contributed to Google's Flax library",
        'Enhanced ML framework capabilities',
      ],
    },
    {
      icon: <Users2 size={32} />,
      title: 'Hackathon Leadership',
      items: [
        'Organized AlphaByte 1.0 national hackathon',
        '900+ participants across 300+ teams',
        'Led logistics, mentorship, and problem curation',
      ],
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-dark-secondary to-dark-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card-glass p-6 rounded-2xl hover:border-neon-cyan transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-neon-blue/10 rounded-lg text-neon-cyan">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {achievement.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-300 text-sm flex items-start gap-2"
                  >
                    <span className="text-neon-cyan mt-1">★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
