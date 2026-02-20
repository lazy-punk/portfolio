import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award, Star, Users2, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const achievements = [
    {
      icon: <Trophy size={24} />,
      title: 'Kaggle Competition Rankings',
      date: '2024-2025',
      description: 'Consistently ranked in top percentiles across multiple machine learning competitions.',
      items: [
        'Top 2.4% (39/1600) - Digit Recognition Challenge',
        'Top 11.3% (269/2390) - Insurance Regression Challenge',
        'Top 23.8% (3800/16000) - Titanic Challenge',
      ],
      tags: ['Kaggle', 'Competition', 'ML'],
      link: 'https://www.kaggle.com/sanepunk05',
    },
    {
      icon: <Award size={24} />,
      title: 'Open Source Contribution',
      date: 'April 2025',
      description: "Contributed to Google's Flax library, enhancing ML framework capabilities for the community.",
      items: [
        'Enhanced framework capabilities',
        'Improved documentation and examples',
      ],
      tags: ['Open Source', 'Google', 'Flax'],
      link: 'https://github.com/google/flax/pull/4773',
    },
    {
      icon: <Users2 size={24} />,
      title: 'AlphaByte 1.0 Hackathon Leadership',
      date: 'January 2025',
      description: 'Organized and managed national hackathon with massive participation.',
      items: [
        '900+ participants across 300+ teams',
        'Led logistics, mentorship, and problem curation',
        'Successful nationwide technical event',
      ],
      tags: ['Leadership', 'Hackathon', 'Organization'],
      link: null,
    },
    {
      icon: <Star size={24} />,
      title: 'Data Science Competition Podiums',
      date: '2024',
      description: 'Secured top positions in university-level data science competitions.',
      items: [
        '3rd Place out of 20 teams - University Datathon',
        '4th Place out of 35 teams - University Datathon',
      ],
      tags: ['Datathon', 'Competition', 'Data Science'],
      link: null,
    },
  ];

  const displayedAchievements = showAll ? achievements : achievements.slice(0, 3);

  return (
    <section id="achievements" className="py-20 bg-dark-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Achievements & News</h2>
          <p className="text-gray-400">Latest updates, recognitions, and highlights</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {displayedAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-6 rounded-xl hover:border-neon-cyan/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-neon-blue/10 rounded-lg text-neon-cyan group-hover:bg-neon-blue/20 transition-colors">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{achievement.date}</p>
                  </div>
                </div>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <p className="text-gray-300 text-sm mb-4">{achievement.description}</p>

              <ul className="space-y-2 mb-4">
                {achievement.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-400 text-sm flex items-start gap-2"
                  >
                    <span className="text-neon-cyan mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {achievement.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded text-neon-cyan text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {achievements.length > 3 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors font-medium"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Show More Achievements <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
