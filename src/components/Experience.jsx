import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: 'Yawnn',
      role: 'Founding Machine Learning Intern',
      period: 'Jun. 2025 – Present',
      location: 'Remote, India',
      achievements: [
        'Engineered Python/Selenium scrapers extracting 5K+ reviews from e-commerce sites',
        'Curated ML dataset with 95% quality score in 2 weeks',
        'Developed vector-based recommendation engine with 87% accuracy using embedding models',
        'Reduced customer decision time by 40%',
      ],
    },
    {
      company: 'Pivotal Teleradiology',
      role: 'Machine Learning Intern',
      period: 'May 2025 – Jul. 2025',
      location: 'Remote, India',
      achievements: [
        'Built FastAPI backend managing 200+ patient records',
        'Reduced API latency by 10%',
        'Developed Transformer-DenseNet TB detection model achieving 92% accuracy (AUC 0.94)',
        'Processed 100+ X-rays with interpretable heatmaps',
      ],
    },
    {
      company: 'Definedge Securities',
      role: 'Software Development Engineering Intern',
      period: 'Sep. 2024 – Dec. 2024',
      location: 'Pune, India',
      achievements: [
        'Authored Go client library for trading API with secure authentication',
        'Implemented real-time market data processing',
        'Improved performance by 34% vs Python implementation',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-blue via-neon-cyan to-neon-purple" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-0 md:translate-y-0 w-4 h-4 bg-neon-cyan rounded-full border-4 border-dark-bg z-10" />

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="ml-8 md:ml-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="card-glass p-6 rounded-2xl hover:border-neon-cyan transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="text-neon-cyan" size={20} />
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      </div>
                      
                      <h4 className="text-lg text-neon-blue font-semibold mb-2">{exp.role}</h4>
                      
                      <div className="flex items-center gap-2 text-gray-400 mb-4">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                        <span className="text-sm">• {exp.location}</span>
                      </div>

                      <ul className="space-y-2 text-left">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <span className="text-neon-cyan mt-1">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
