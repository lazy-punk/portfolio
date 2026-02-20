import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Trophy, GitFork, Calendar } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-bg to-dark-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">About</h2>
          <p className="text-gray-400">Building AI that actually works!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              Currently deep into <span className="text-neon-cyan font-semibold">Vision-Language Models</span> and{' '}
              <span className="text-neon-blue font-semibold">Agentic Systems</span>, with hands-on experience 
              taking AI projects from wild ideas to real products.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Love tinkering with <span className="text-neon-purple font-semibold">model fine-tuning</span> and{' '}
              <span className="text-neon-cyan font-semibold">cloud deployments</span>. Big open-source enthusiast — 
              you'll find me contributing to projects that make AI more accessible to everyone.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <a href="https://www.kaggle.com/sanepunk05" target="_blank" rel="noopener noreferrer" className="card-glass p-4 rounded-lg hover:border-neon-cyan/50 border border-transparent transition-all duration-300 group">
                <Trophy className="text-neon-cyan mb-2 group-hover:scale-110 transition-transform" size={24} />
                <p className="text-2xl font-bold text-white">Active Kaggler</p>
                <p className="text-gray-400 text-sm">Check My Profile</p>
              </a>
              <div className="card-glass p-4 rounded-lg">
                <Award className="text-neon-cyan mb-2" size={24} />
                <p className="text-2xl font-bold text-white">5643+</p>
                <p className="text-gray-400 text-sm">PyPI Downloads</p>
              </div>
              <div className="card-glass p-4 rounded-lg">
                <GitFork className="text-neon-cyan mb-2" size={24} />
                <p className="text-2xl font-bold text-white">Google Flax</p>
                <p className="text-gray-400 text-sm">Contributor</p>
              </div>
              <div className="card-glass p-4 rounded-lg">
                <Calendar className="text-neon-cyan mb-2" size={24} />
                <p className="text-2xl font-bold text-white">3+</p>
                <p className="text-gray-400 text-sm">Hackathon Participations</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="card-glass p-6 rounded-xl">
              <GraduationCap className="text-neon-cyan mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-neon-blue pl-4">
                  <h4 className="text-lg font-semibold text-neon-cyan">
                    B.Tech in Information Technology
                  </h4>
                  <p className="text-gray-400 text-sm mb-1">
                    Pimpri Chinchwad College of Engineering
                  </p>
                  <p className="text-gray-500 text-xs mb-2">Nov 2022 – Jun 2026</p>
                  <p className="text-gray-300 text-sm">
                    GPA: <span className="text-white font-semibold">3.28/4.0</span> (8.22/10.0)
                  </p>
                </div>

                <div className="border-l-2 border-neon-cyan pl-4">
                  <h4 className="text-lg font-semibold text-neon-cyan">
                    Honors Program in Deep Learning
                  </h4>
                  <p className="text-gray-400 text-sm mb-1">
                    Pimpri Chinchwad College of Engineering
                  </p>
                  <p className="text-gray-500 text-xs mb-2">Aug 2024 – Jun 2026</p>
                  <p className="text-gray-300 text-sm">
                    GPA: <span className="text-neon-cyan font-semibold">3.9/4.0</span> (9.8/10.0)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
