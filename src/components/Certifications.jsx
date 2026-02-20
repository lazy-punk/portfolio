import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: 'Machine Learning Specialization',
      provider: 'Coursera',
      grade: '99.75%',
      icon: '🎓',
    },
    {
      title: 'Generative Adversarial Networks Specialization',
      provider: 'Coursera',
      grade: '99.5%',
      icon: '🤖',
    },
    {
      title: 'Deep Learning Specialization',
      provider: 'Coursera',
      grade: '97.01%',
      icon: '🧠',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-dark-secondary to-dark-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Certifications</h2>
          <p className="text-gray-400">Professional certifications and achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-6 rounded-xl hover:border-neon-cyan/50 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{cert.icon}</div>
                <CheckCircle2 className="text-green-400" size={24} />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors leading-tight">
                {cert.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">{cert.provider}</p>

              <div className="pt-4 border-t border-neon-blue/20">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Grade</span>
                  <span className="text-2xl font-bold text-gradient">{cert.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
