import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Trophy, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: <Award />, value: '50+', label: 'Research Reports' },
    { icon: <Trophy />, value: '500+', label: 'Academic Sources' },
    { icon: <Users />, value: '5K+', label: 'Data Samples' },
    { icon: <GraduationCap />, value: 'Top 2.4%', label: 'Kaggle Ranking' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-bg to-dark-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card-glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">Final Year B.Tech Student</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a final year Computer Science student specializing in{' '}
                <span className="text-neon-blue font-semibold">AI systems</span>,{' '}
                <span className="text-neon-cyan font-semibold">research automation</span>, and{' '}
                <span className="text-neon-purple font-semibold">ML engineering</span>. My work focuses on 
                building production-ready machine learning systems and autonomous AI agents.
              </p>

              <div className="space-y-4 mt-6">
                <div className="border-l-4 border-neon-blue pl-4">
                  <h4 className="text-lg font-semibold text-white">Education</h4>
                  <p className="text-gray-400">B.Tech in Information Technology (2022-2026)</p>
                  <p className="text-gray-400">GPA: 3.28/4.0 (8.22/10.0)</p>
                  <p className="text-neon-cyan mt-2">Honors Program in Deep Learning</p>
                  <p className="text-gray-400">GPA: 3.9/4.0 (9.8/10.0)</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="text-neon-cyan" size={20} />
                  <span className="text-gray-300">Kaggle Top 2.4% ranking</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="text-neon-cyan" size={20} />
                  <span className="text-gray-300">Organized national hackathon (900+ participants)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-neon-cyan" size={20} />
                  <span className="text-gray-300">Open source contributor to Google's Flax</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="card-glass p-6 rounded-xl text-center hover:border-neon-cyan transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex justify-center mb-3 text-neon-cyan">
                    {React.cloneElement(stat.icon, { size: 32 })}
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
