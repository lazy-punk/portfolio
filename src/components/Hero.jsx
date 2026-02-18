import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileDown, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Ojas Patil — AI Engineer & Machine Learning Researcher";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 min-h-[150px] md:min-h-[200px]">
              <span className="text-gradient glow-text">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building <span className="text-neon-cyan font-semibold">production-ready ML systems</span>,{' '}
              <span className="text-neon-blue font-semibold">autonomous AI agents</span>, and{' '}
              <span className="text-neon-purple font-semibold">high-performance ML infrastructure</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-neon-blue text-neon-cyan font-semibold rounded-lg hover:bg-neon-blue/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <FileDown size={20} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/sanepunk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-neon-blue/30 rounded-full hover:border-neon-cyan hover:bg-neon-blue/10 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="text-neon-cyan" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ojas-patil-exe/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-neon-blue/30 rounded-full hover:border-neon-cyan hover:bg-neon-blue/10 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="text-neon-cyan" size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-neon-cyan" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
