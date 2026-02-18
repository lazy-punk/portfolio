import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: 'Machine Learning Specialization',
      provider: 'Coursera',
      grade: '99.75%',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Generative Adversarial Networks Specialization',
      provider: 'Coursera',
      grade: '99.5%',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Deep Learning Specialization',
      provider: 'Coursera',
      grade: '97.01%',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-dark-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative card-glass p-6 rounded-2xl hover:border-neon-cyan transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <GraduationCap className="text-neon-cyan" size={32} />
                  <CheckCircle className="text-green-400" size={24} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {cert.title}
                </h3>

                <div className="mb-4">
                  <p className="text-gray-400 text-sm">{cert.provider}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-neon-blue/20">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Final Grade</span>
                    <span className="text-2xl font-bold text-gradient">{cert.grade}</span>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${cert.color} opacity-20 blur-3xl rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
