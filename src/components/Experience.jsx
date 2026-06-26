import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: 'CrestData',
      role: 'SDE Intern',
      period: 'March. 2026 – Present',
      location: 'Pune, India',
      logo: '🚀',
      achievements: [
        'Building Workflow Automations',
      ],
    },
    {
      company: 'Yawnn',
      role: 'Founding Machine Learning Intern',
      period: 'Jun. 2025 – Sep.2025',
      location: 'Remote, India',
      logo: '🚀',
      achievements: [
        'Data Engineering & Web Scraping: Engineered Python/Selenium scrapers extracting 5K+ reviews from e-commerce sites. Curated ML dataset with 95% quality score in 2 weeks',
        'Recommendation Systems: Developed vector-based recommendation engine with 87% accuracy using embedding models. Reduced customer decision time by 40%',
      ],
    },
    {
      company: 'Pivotal Teleradiology',
      role: 'Machine Learning Intern',
      period: 'May 2025 – Jul. 2025',
      location: 'Remote, India',
      logo: '🏥',
      achievements: [
        'Healthcare API Development: Built FastAPI backend managing 200+ patient records. Reduced API latency by 10%',
        'Medical AI Systems: Developed Transformer-DenseNet TB detection model achieving 92% accuracy (AUC 0.94) on 100+ X-rays with interpretable heatmaps',
      ],
    },
    {
      company: 'Definedge Securities',
      role: 'Software Development Engineering Intern',
      period: 'Sep. 2024 – Dec. 2024',
      location: 'Pune, India',
      logo: '📈',
      achievements: [
        'API Client Development: Authored Go client library for trading API with secure authentication and real-time market data. Improved performance by 34% vs Python',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Work Experience</h2>
          <p className="text-gray-400">Professional journey and key contributions</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glass p-6 rounded-xl hover:border-neon-cyan/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className="flex-shrink-0 w-16 h-16 bg-neon-blue/10 rounded-lg flex items-center justify-center text-3xl border border-neon-blue/20">
                    {exp.logo}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.company}</h3>
                    <h4 className="text-lg text-neon-cyan font-semibold mb-2">{exp.role}</h4>
                    
                    <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm mb-4">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-neon-cyan shrink-0 leading-5">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
